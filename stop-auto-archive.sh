#!/bin/bash

# Скрипт для остановки автоматического архивирования
# Использование: ./stop-auto-archive.sh

PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
PID_FILE="${PROJECT_DIR}/.archive-background.pid"

if [ ! -f "$PID_FILE" ]; then
    echo "ℹ️  Автоматическое архивирование не запущено"
    exit 0
fi

PID=$(cat "$PID_FILE")

if ps -p "$PID" > /dev/null 2>&1; then
    kill "$PID"
    echo "🛑 Остановка автоматического архивирования (PID: $PID)..."
    sleep 1
    
    if ps -p "$PID" > /dev/null 2>&1; then
        kill -9 "$PID"
        echo "⚠️  Принудительная остановка"
    fi
    
    rm -f "$PID_FILE"
    echo "✅ Автоматическое архивирование остановлено"
else
    echo "ℹ️  Процесс не найден. Удаляю PID файл..."
    rm -f "$PID_FILE"
fi

