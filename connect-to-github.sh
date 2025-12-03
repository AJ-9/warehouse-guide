#!/bin/bash

# Скрипт для подключения к GitHub репозиторию

REPO_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
cd "$REPO_DIR" || exit 1

echo "🔗 Подключение к GitHub"
echo ""

# Проверка наличия Git
if ! command -v git &> /dev/null; then
    echo "❌ Git не установлен. Установите Git сначала."
    exit 1
fi

# Проверка наличия remote
if git remote get-url origin &> /dev/null; then
    echo "✅ Remote уже настроен:"
    git remote -v
    echo ""
    read -p "Хотите изменить remote? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git remote remove origin
    else
        echo "Remote не изменен."
        exit 0
    fi
fi

# Запрос URL репозитория
echo "Введите URL вашего GitHub репозитория:"
echo "Примеры:"
echo "  - https://github.com/username/repo-name.git"
echo "  - git@github.com:username/repo-name.git"
echo ""
read -p "URL: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ URL не указан. Отмена."
    exit 1
fi

# Добавление remote
echo ""
echo "📡 Добавление remote..."
git remote add origin "$REPO_URL"

if [ $? -eq 0 ]; then
    echo "✅ Remote добавлен успешно!"
    echo ""
    echo "Текущие remotes:"
    git remote -v
    echo ""
    echo "📤 Для отправки файлов на GitHub выполните:"
    echo "   git push -u origin main"
else
    echo "❌ Ошибка при добавлении remote."
    exit 1
fi

