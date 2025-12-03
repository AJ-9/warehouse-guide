#!/bin/bash

# Скрипт для настройки автоматического архивирования
# Этот скрипт создаст альтернативное решение, если расширение не работает

PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"

echo "🔧 Настройка автоматического архивирования..."

# Проверяем наличие fswatch
if command -v fswatch &> /dev/null; then
    echo "✅ fswatch установлен"
    
    # Создаем скрипт для мониторинга
    cat > "${PROJECT_DIR}/watch-files.sh" << 'EOF'
#!/bin/bash
PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
LAST_ARCHIVE=0

fswatch -o "${PROJECT_DIR}" --exclude='.*' --exclude='archive-log.txt' --exclude='*.zip' | while read f; do
    CURRENT=$(date +%s)
    if [ $((CURRENT - LAST_ARCHIVE)) -ge 5 ]; then
        "${PROJECT_DIR}/auto-archive-on-change.sh" auto-save &
        LAST_ARCHIVE=$CURRENT
    fi
done
EOF
    
    chmod +x "${PROJECT_DIR}/watch-files.sh"
    echo "✅ Создан скрипт watch-files.sh"
    echo ""
    echo "📝 Для запуска автоматического мониторинга выполните:"
    echo "   ./watch-files.sh"
    echo ""
    echo "💡 Или запустите в фоне:"
    echo "   nohup ./watch-files.sh > /dev/null 2>&1 &"
else
    echo "⚠️  fswatch не установлен"
    echo "💡 Установите fswatch: brew install fswatch"
fi

echo ""
echo "📋 Альтернативные способы архивирования:"
echo ""
echo "1. Установите расширение 'Run on Save' в Cursor/VS Code"
echo "2. Используйте watch-files.sh для мониторинга изменений"
echo "3. Создавайте архив вручную: ./quick-archive.sh 'описание'"
echo ""

