#!/bin/bash

# Остановка автоматической отправки изменений

REPO_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
LOCK_FILE="$REPO_DIR/.auto-push.lock"

if [ -f "$LOCK_FILE" ]; then
    PID=$(cat "$LOCK_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "🛑 Остановка процесса автоматической отправки (PID: $PID)..."
        kill "$PID"
        rm -f "$LOCK_FILE"
        echo "✅ Процесс остановлен"
    else
        echo "⚠️  Процесс не найден, удаляю lock файл"
        rm -f "$LOCK_FILE"
    fi
else
    echo "ℹ️  Автоматическая отправка не запущена"
fi

