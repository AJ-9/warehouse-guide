#!/bin/bash

# Автоматический демон для архивирования при каждом изменении файлов
# Работает в фоне без необходимости расширений

PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
DESKTOP_DIR="/Users/alikbidzhiev/Desktop"
LOG_FILE="${PROJECT_DIR}/archive-log.txt"
LOCK_FILE="${PROJECT_DIR}/.archive-lock"
PID_FILE="${PROJECT_DIR}/.archive-background.pid"
LAST_ARCHIVE_TIME=0
DEBOUNCE_SECONDS=10  # Минимальный интервал между архивами (10 секунд)

# Функция создания архива
create_archive() {
    local description=$1
    local current_time=$(date +%s)
    local time_since_last=$((current_time - LAST_ARCHIVE_TIME))
    
    if [ $time_since_last -lt $DEBOUNCE_SECONDS ]; then
        return 0
    fi
    
    # Проверка блокировки
    if [ -f "$LOCK_FILE" ]; then
        local lock_pid=$(cat "$LOCK_FILE" 2>/dev/null)
        if [ -n "$lock_pid" ] && ps -p "$lock_pid" > /dev/null 2>&1; then
            return 0
        fi
    fi
    
    # Создаем lock
    echo $$ > "$LOCK_FILE"
    
    local timestamp=$(date +%Y%m%d-%H%M%S)
    local archive_name="warehouse-guide-${description}-${timestamp}.zip"
    local archive_path="${DESKTOP_DIR}/${archive_name}"
    
    cd "${DESKTOP_DIR}"
    zip -r "${archive_name}" "warehouse-guide-corrected 2" \
        -x "*.DS_Store" "*/.*" "*/node_modules/*" \
        -x "warehouse-guide-corrected 2/.DS_Store" \
        -x "warehouse-guide-corrected 2/images/.DS_Store" \
        -x "warehouse-guide-corrected 2/*.zip" \
        > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        local size=$(ls -lh "${archive_path}" | awk '{print $5}')
        echo "$(date '+%Y-%m-%d %H:%M:%S') - ${description} - ${archive_name} (${size})" >> "${LOG_FILE}"
        LAST_ARCHIVE_TIME=$current_time
    fi
    
    # Удаляем lock
    rm -f "$LOCK_FILE"
}

# Основные файлы для отслеживания
WATCHED_FILES=(
    "${PROJECT_DIR}/app.js"
    "${PROJECT_DIR}/index.html"
    "${PROJECT_DIR}/sw.js"
    "${PROJECT_DIR}/manifest.json"
)

# Сохраняем PID
echo $$ > "$PID_FILE"

# Обработка завершения
cleanup() {
    echo "🛑 Остановка мониторинга..."
    rm -f "$PID_FILE"
    rm -f "$LOCK_FILE"
    exit 0
}

trap cleanup SIGINT SIGTERM

echo "👀 Запуск автоматического мониторинга файлов..."
echo "📁 Отслеживаемые файлы:"
for file in "${WATCHED_FILES[@]}"; do
    echo "   - $(basename "$file")"
done
echo "⏱️  Интервал между архивами: ${DEBOUNCE_SECONDS} секунд"
echo "✅ Мониторинг активен. Изменения файлов будут автоматически архивироваться."
echo "🛑 Для остановки: ./stop-auto-archive.sh или удалите файл .archive-background.pid"
echo ""

# Основной цикл мониторинга
while true; do
    # Проверяем, что PID файл существует
    if [ ! -f "$PID_FILE" ]; then
        break
    fi
    
    # Проверяем время модификации файлов
    for file in "${WATCHED_FILES[@]}"; do
        if [ -f "$file" ]; then
            # Получаем время последней модификации
            if [[ "$OSTYPE" == "darwin"* ]]; then
                # macOS
                file_time=$(stat -f %m "$file" 2>/dev/null)
            else
                # Linux
                file_time=$(stat -c %Y "$file" 2>/dev/null)
            fi
            
            if [ -n "$file_time" ]; then
                current_time=$(date +%s)
                time_diff=$((current_time - file_time))
                
                # Если файл был изменен в последние 5 секунд
                if [ $time_diff -lt 5 ] && [ $time_diff -ge 0 ]; then
                    create_archive "auto-change"
                    sleep 2  # Небольшая пауза после создания архива
                    break
                fi
            fi
        fi
    done
    
    sleep 2  # Проверка каждые 2 секунды
done

cleanup

