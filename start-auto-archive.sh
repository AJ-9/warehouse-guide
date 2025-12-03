#!/bin/bash

# Скрипт для запуска автоматического архивирования в фоне
# Использование: ./start-auto-archive.sh

PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
PID_FILE="${PROJECT_DIR}/.archive-daemon.pid"

# Проверяем, не запущен ли уже демон
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "✅ Автоматическое архивирование уже запущено (PID: $PID)"
        echo "🛑 Для остановки: ./stop-auto-archive.sh"
        exit 0
    else
        # Удаляем старый PID файл
        rm -f "$PID_FILE"
    fi
fi

cd "$PROJECT_DIR"

echo "🚀 Запуск автоматического архивирования..."
echo "📁 Директория: $PROJECT_DIR"
echo ""

# Запускаем демон в фоне (используем bash скрипт, работает без Node.js)
bash auto-archive-background.sh > archive-daemon.log 2>&1 &

# Ждем немного и проверяем
sleep 3

if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "✅ Автоматическое архивирование запущено (PID: $PID)"
        echo "📝 Логи: archive-daemon.log"
        echo "🛑 Для остановки: ./stop-auto-archive.sh"
        echo ""
        echo "💡 Теперь при каждом изменении файлов будет автоматически создаваться архив!"
    else
        echo "⚠️  PID файл найден, но процесс не запущен. Проверьте логи: archive-daemon.log"
        cat archive-daemon.log 2>/dev/null | tail -5
    fi
else
    echo "⚠️  PID файл не создан. Проверьте логи: archive-daemon.log"
    cat archive-daemon.log 2>/dev/null | tail -5
fi

