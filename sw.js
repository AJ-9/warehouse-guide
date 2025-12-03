// Версия кэша - ОБЯЗАТЕЛЬНО обновляйте при каждом изменении файлов!
// Формат: v[версия]-[дата в формате YYYYMMDD]
const CACHE_VERSION = 'v2.1.4-20251203';
const CACHE_NAME = 'warehouse-guide-' + CACHE_VERSION;
const STATIC_CACHE = 'warehouse-guide-static-' + CACHE_VERSION;
const DYNAMIC_CACHE = 'warehouse-guide-dynamic-' + CACHE_VERSION;

// Ресурсы, которые должны кэшироваться статически
const staticAssets = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './sw.js'
];

const normalizedStaticUrls = staticAssets.map(asset => new URL(asset, self.location).href);
const normalizedStaticPaths = staticAssets.map(asset => {
  const { pathname } = new URL(asset, self.location);
  return pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname || '/';
});

function isStaticAssetRequest(request, url) {
  const requestPath = url.pathname.endsWith('/') && url.pathname.length > 1
    ? url.pathname.slice(0, -1)
    : url.pathname || '/';
  const matchesPath = normalizedStaticPaths.includes(requestPath);
  const matchesUrl = normalizedStaticUrls.includes(request.url);
  return matchesPath || matchesUrl || request.mode === 'navigate';
}

// Установка Service Worker
self.addEventListener('install', function(event) {
  console.log('Service Worker installing...', CACHE_VERSION);
  
  // Пропускаем ожидание и сразу активируем новый Service Worker
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(function(cache) {
        console.log('Opened static cache:', STATIC_CACHE);
        // Используем cache.addAll с обработкой ошибок для каждого файла
        return Promise.allSettled(
          staticAssets.map(function(asset) {
            const requestUrl = new URL(asset, self.location).href;
            const request = new Request(requestUrl, { cache: 'reload' });
            return fetch(request)
              .then(function(response) {
                if (response.ok) {
                  return cache.put(request, response.clone());
                }
              })
              .catch(function(error) {
                console.warn('Failed to cache:', asset, error);
              });
          })
        );
      })
      .then(function() {
        console.log('Cache installation completed');
        // Принудительно активируем новый Service Worker
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('Cache installation failed:', error);
        // Все равно активируем Service Worker даже при ошибке кэширования
        return self.skipWaiting();
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating...', CACHE_VERSION);
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      console.log('Found caches:', cacheNames);
      return Promise.all(
        cacheNames
          .map(function(cacheName) {
            // Удаляем ВСЕ старые кэши (не только с другими именами, но и старые версии)
            if (!cacheName.includes(CACHE_VERSION) && cacheName.includes('warehouse-guide')) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return Promise.resolve(); // Возвращаем resolved promise для кэшей, которые не нужно удалять
          })
          .filter(function(promise) {
            return promise !== undefined; // Фильтруем undefined
          })
      );
    }).then(function() {
      console.log('Old caches deleted, claiming clients...');
      // Принудительно берем контроль над всеми клиентами
      return self.clients.claim();
    }).then(function() {
      console.log('Service Worker activated and claimed clients');
      // Отправляем сообщение всем клиентам о готовности
      return self.clients.matchAll().then(function(clients) {
        clients.forEach(function(client) {
          client.postMessage({
            type: 'SW_ACTIVATED',
            version: CACHE_VERSION
          });
        });
      });
    })
  );
});

// Перехват запросов с улучшенной стратегией кэширования
self.addEventListener('fetch', function(event) {
  const request = event.request;
  const url = new URL(request.url);

  // Стратегия для статических ресурсов (Network First с принудительным обновлением)
  if (isStaticAssetRequest(request, url)) {
    event.respondWith(
      // Всегда пытаемся получить свежую версию из сети
      fetch(request, { cache: 'no-store', headers: { 'Cache-Control': 'no-cache' } })
        .then(function(fetchResponse) {
          if (fetchResponse && fetchResponse.status === 200) {
            const responseToCache = fetchResponse.clone();
            // Обновляем кэш с новой версией
            caches.open(STATIC_CACHE).then(function(cache) {
              cache.put(request, responseToCache);
            });
            return fetchResponse;
          }
          // Если ответ не OK, пробуем кэш
          return caches.match(request);
        })
        .catch(function() {
          // Если нет сети, возвращаем из кэша
          return caches.match(request).then(function(response) {
            if (response) {
              return response;
            }
            // Офлайн режим
            if (request.destination === 'document') {
              return caches.match('./index.html') || caches.match('/index.html');
            }
          });
        })
    );
    return;
  }

  // Стратегия для изображений (Network First - сначала сеть, потом кэш)
  if (request.destination === 'image') {
    event.respondWith(
      fetch(request, { cache: 'no-store' })
        .then(function(fetchResponse) {
          if (fetchResponse && fetchResponse.status === 200) {
            const responseToCache = fetchResponse.clone();
            caches.open(DYNAMIC_CACHE).then(function(cache) {
              cache.put(request, responseToCache);
            });
            return fetchResponse;
          }
          // Если сеть не доступна или ошибка, пробуем кэш
          return caches.match(request);
        })
        .catch(function() {
          // Если нет сети, возвращаем из кэша
          return caches.match(request);
        })
    );
    return;
  }

  // Стратегия для остальных запросов (Network First)
  event.respondWith(
    fetch(request)
      .then(function(response) {
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE).then(function(cache) {
            cache.put(request, responseToCache);
          });
        }
        return response;
      })
      .catch(function() {
        // Если нет сети, возвращаем из кэша
        return caches.match(request);
      })
  );
});

// Обработка сообщений от основного потока
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({
      version: CACHE_NAME
    });
  }
});
