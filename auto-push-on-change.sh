#!/bin/bash

# Автоматический мониторинг изменений и отправка на GitHub
# Запускается в фоновом режиме и отслеживает изменения файлов

REPO_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
cd "$REPO_DIR" || exit 1

LOCK_FILE="$REPO_DIR/.auto-push.lock"
LOG_FILE="$REPO_DIR/auto-push.log"

# Проверка, не запущен ли уже процесс
if [ -f "$LOCK_FILE" ]; then
    PID=$(cat "$LOCK_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "⚠️  Автоматическая отправка уже запущена (PID: $PID)"
        exit 1
    else
        rm -f "$LOCK_FILE"
    fi
fi

# Сохраняем PID процесса
echo $$ > "$LOCK_FILE"

echo "🚀 Запуск автоматического мониторинга изменений..."
echo "📁 Директория: $REPO_DIR"
echo "📝 Лог: $LOG_FILE"
echo "🛑 Для остановки: ./stop-auto-push.sh"
echo ""

# Функция для отправки изменений
push_changes() {
    local commit_msg="Auto-update: $(date '+%Y-%m-%d %H:%M:%S')"
    
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Обнаружены изменения, отправка..." >> "$LOG_FILE"
    
    cd "$REPO_DIR" || return 1
    
    # Проверяем, есть ли изменения
    if [ -z "$(git status --porcelain)" ]; then
        return 0
    fi
    
    git add . >> "$LOG_FILE" 2>&1
    git commit -m "$commit_msg" >> "$LOG_FILE" 2>&1
    
    if git push origin main >> "$LOG_FILE" 2>&1; then
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ Успешно отправлено" >> "$LOG_FILE"
        return 0
    else
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] ❌ Ошибка при отправке" >> "$LOG_FILE"
        return 1
    fi
}

# Отслеживание изменений с задержкой (чтобы не отправлять при каждом сохранении)
LAST_PUSH_TIME=0
PUSH_DELAY=30  # Задержка в секундах между отправками

# Основной цикл мониторинга
while true; do
    CURRENT_TIME=$(date +%s)
    
    # Проверяем изменения каждые 5 секунд
    if [ -n "$(git status --porcelain)" ]; then
        TIME_SINCE_LAST_PUSH=$((CURRENT_TIME - LAST_PUSH_TIME))
        
        if [ $TIME_SINCE_LAST_PUSH -ge $PUSH_DELAY ]; then
            push_changes
            LAST_PUSH_TIME=$(date +%s)
        fi
    fi
    
    sleep 5
done

