#!/bin/bash

# Скрипт для проверки статуса последней архивации

LOG_FILE="/tmp/archive-confirm.log"

if [ ! -f "$LOG_FILE" ]; then
    echo "ℹ️  Лог архивации не найден"
    exit 0
fi

echo "📋 Последние записи архивации:"
echo ""
tail -20 "$LOG_FILE"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "💡 Для просмотра полного лога: cat $LOG_FILE"

