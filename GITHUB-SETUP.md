# Настройка подключения к GitHub

## Текущий статус
✅ Git репозиторий инициализирован
✅ Первый коммит создан
✅ Файлы добавлены в репозиторий

## Подключение к GitHub

### Вариант 1: Если у вас уже есть репозиторий на GitHub

1. Создайте новый репозиторий на GitHub (или используйте существующий)
2. Выполните команды:

```bash
cd "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Вариант 2: Создание нового репозитория через GitHub CLI

Если у вас установлен GitHub CLI:

```bash
cd "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
gh repo create warehouse-guide --public --source=. --remote=origin --push
```

### Вариант 3: Через веб-интерфейс GitHub

1. Перейдите на https://github.com/new
2. Создайте новый репозиторий (например, `warehouse-guide`)
3. НЕ инициализируйте его с README, .gitignore или лицензией
4. Выполните команды:

```bash
cd "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
git remote add origin https://github.com/YOUR_USERNAME/warehouse-guide.git
git branch -M main
git push -u origin main
```

## Обновление файлов на GitHub

После подключения, для обновления файлов используйте:

```bash
git add .
git commit -m "Описание изменений"
git push
```

## Автоматическое обновление

Для автоматического обновления при изменениях файлов можно использовать GitHub Actions или настроить автоматический push через скрипт.

