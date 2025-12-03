#!/bin/bash

# Запуск автоматической архивации после подтверждения изменений

PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
PID_FILE="${PROJECT_DIR}/.archive-confirm.pid"

# Проверка, не запущен ли уже процесс
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "✅ Автоматическая архивация уже запущена (PID: $PID)"
        exit 0
    else
        rm -f "$PID_FILE"
    fi
fi

# Запуск в фоне
cd "$PROJECT_DIR"
nohup bash auto-archive-on-confirm.sh > /tmp/archive-confirm.log 2>&1 &
ARCHIVE_PID=$!

# Сохраняем PID сразу
echo $ARCHIVE_PID > "$PID_FILE"

# Даем время процессу инициализироваться
sleep 2

# Проверяем, что процесс все еще работает
if ps -p "$ARCHIVE_PID" > /dev/null 2>&1; then
    echo "✅ Автоматическая архивация запущена (PID: $ARCHIVE_PID)"
    echo "📝 Архивация будет выполняться автоматически через 5 секунд после сохранения файлов"
    echo "📋 Лог: /tmp/archive-confirm.log"
else
    echo "❌ Процесс не запустился. Проверьте лог: /tmp/archive-confirm.log"
    rm -f "$PID_FILE"
    cat /tmp/archive-confirm.log 2>/dev/null | tail -5
fi

