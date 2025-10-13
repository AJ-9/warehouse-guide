const CACHE_NAME = 'warehouse-guide-v2.0.4-spravochnik-sklad';
const STATIC_CACHE = 'warehouse-guide-static-v2.0.4-spravochnik-sklad';
const DYNAMIC_CACHE = 'warehouse-guide-dynamic-v2.0.4-spravochnik-sklad';

const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './sw.js'
];

// Ресурсы, которые должны кэшироваться статически
const staticAssets = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './sw.js'
];

// Установка Service Worker
self.addEventListener('install', function(event) {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(function(cache) {
        console.log('Opened static cache');
        return cache.addAll(staticAssets);
      })
      .then(function() {
        // Принудительно активируем новый Service Worker
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('Cache installation failed:', error);
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // Удаляем старые кэши
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      // Принудительно берем контроль над всеми клиентами
      return self.clients.claim();
    })
  );
});

// Перехват запросов с улучшенной стратегией кэширования
self.addEventListener('fetch', function(event) {
  const request = event.request;
  const url = new URL(request.url);

  // Стратегия для статических ресурсов (Network First для обновлений)
  if (staticAssets.includes(url.pathname) || url.pathname === './') {
    event.respondWith(
      fetch(request)
        .then(function(fetchResponse) {
          if (fetchResponse && fetchResponse.status === 200) {
            const responseToCache = fetchResponse.clone();
            caches.open(STATIC_CACHE).then(function(cache) {
              cache.put(request, responseToCache);
            });
          }
          return fetchResponse;
        })
        .catch(function() {
          // Если нет сети, возвращаем из кэша
          return caches.match(request).then(function(response) {
            if (response) {
              return response;
            }
            // Офлайн режим
            if (request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
        })
    );
    return;
  }

  // Стратегия для изображений (Stale While Revalidate с приоритетом кэша)
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then(function(response) {
          if (response) {
            // Запускаем обновление в фоне для кэшированных изображений
            fetch(request).then(function(fetchResponse) {
              if (fetchResponse && fetchResponse.status === 200) {
                const responseToCache = fetchResponse.clone();
                caches.open(DYNAMIC_CACHE).then(function(cache) {
                  cache.put(request, responseToCache);
                });
              }
            }).catch(function() {
              // Игнорируем ошибки сети для фонового обновления
            });
            
            // Возвращаем кэшированную версию немедленно
            return response;
          }
          
          // Если нет в кэше, загружаем из сети
          return fetch(request).then(function(fetchResponse) {
            if (fetchResponse && fetchResponse.status === 200) {
              const responseToCache = fetchResponse.clone();
              caches.open(DYNAMIC_CACHE).then(function(cache) {
                cache.put(request, responseToCache);
              });
            }
            return fetchResponse;
          });
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
