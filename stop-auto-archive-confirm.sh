#!/bin/bash

# Остановка автоматической архивации после подтверждения

PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
PID_FILE="${PROJECT_DIR}/.archive-confirm.pid"

if [ ! -f "$PID_FILE" ]; then
    echo "ℹ️  Автоматическая архивация не запущена"
    exit 0
fi

PID=$(cat "$PID_FILE")

if ps -p "$PID" > /dev/null 2>&1; then
    kill "$PID"
    echo "🛑 Остановка автоматической архивации (PID: $PID)..."
    sleep 1
    
    if ps -p "$PID" > /dev/null 2>&1; then
        kill -9 "$PID"
        echo "⚠️  Принудительная остановка"
    fi
    
    rm -f "$PID_FILE"
    echo "✅ Автоматическая архивация остановлена"
else
    echo "ℹ️  Процесс не найден. Удаляю PID файл..."
    rm -f "$PID_FILE"
fi

