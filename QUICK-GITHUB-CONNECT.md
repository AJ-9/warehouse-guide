# Быстрое подключение к GitHub

## Шаг 1: Создайте репозиторий на GitHub

1. **Откройте:** https://github.com/new
2. **Заполните:**
   - Repository name: `warehouse-guide` (или любое другое имя)
   - Выберите Public или Private
   - **ВАЖНО:** НЕ ставьте галочки на:
     - ❌ Add a README file
     - ❌ Add .gitignore  
     - ❌ Choose a license
3. **Нажмите:** "Create repository"

## Шаг 2: Скопируйте URL

После создания репозитория GitHub покажет страницу с инструкциями. Найдите раздел "Quick setup" и скопируйте URL.

**Пример URL:**
```
https://github.com/ваш-username/warehouse-guide.git
```

## Шаг 3: Подключите локальный репозиторий

Выполните команды (замените URL на ваш):

```bash
cd "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
git remote add origin https://github.com/ваш-username/warehouse-guide.git
git branch -M main
git push -u origin main
```

## Или используйте скрипт:

```bash
cd "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
./connect-to-github.sh
```

Скрипт попросит ввести URL репозитория, который вы скопировали на шаге 2.

---

## Если репозиторий уже существует

1. Откройте страницу репозитория на GitHub
2. Нажмите зеленую кнопку **"Code"**
3. Скопируйте URL (HTTPS)
4. Используйте этот URL в командах выше

