#!/bin/bash

# Автоматическое создание архива после каждого изменения файлов
# Использование: ./watch-and-archive.sh [описание по умолчанию]

PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
DEFAULT_DESCRIPTION=${1:-"auto-change"}
LAST_ARCHIVE_TIME=0
DEBOUNCE_SECONDS=30  # Минимальный интервал между архивами (30 секунд)

echo "👀 Мониторинг изменений в проекте..."
echo "📁 Директория: ${PROJECT_DIR}"
echo "⏱️  Интервал между архивами: ${DEBOUNCE_SECONDS} секунд"
echo "🛑 Для остановки нажмите Ctrl+C"
echo ""

# Функция создания архива
create_archive() {
    local description=$1
    local timestamp=$(date +%Y%m%d-%H%M%S)
    local archive_name="warehouse-guide-${description}-${timestamp}.zip"
    local desktop_dir="/Users/alikbidzhiev/Desktop"
    local archive_path="${desktop_dir}/${archive_name}"
    
    echo ""
    echo "🔄 Обнаружены изменения! Создание архива..."
    echo "📦 ${archive_name}"
    
    cd "${desktop_dir}"
    zip -r "${archive_name}" "warehouse-guide-corrected 2" \
        -x "*.DS_Store" "*/.*" "*/node_modules/*" \
        -x "warehouse-guide-corrected 2/.DS_Store" \
        -x "warehouse-guide-corrected 2/images/.DS_Store" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        local size=$(ls -lh "${archive_path}" | awk '{print $5}')
        echo "✅ Архив создан: ${archive_name} (${size})"
        echo "📅 $(date '+%Y-%m-%d %H:%M:%S')"
        
        # Записываем в лог
        echo "$(date '+%Y-%m-%d %H:%M:%S') - ${description} - ${archive_name} (${size})" >> "${PROJECT_DIR}/archive-log.txt"
        
        LAST_ARCHIVE_TIME=$(date +%s)
        return 0
    else
        echo "❌ Ошибка создания архива"
        return 1
    fi
}

# Проверка наличия fswatch (для macOS)
if command -v fswatch &> /dev/null; then
    echo "✅ Используется fswatch для мониторинга"
    echo ""
    
    # Отслеживаем изменения в основных файлах
    fswatch -o "${PROJECT_DIR}" --exclude='.*' --exclude='archive-log.txt' --exclude='*.zip' | while read f; do
        current_time=$(date +%s)
        time_since_last=$((current_time - LAST_ARCHIVE_TIME))
        
        if [ $time_since_last -ge $DEBOUNCE_SECONDS ]; then
            create_archive "${DEFAULT_DESCRIPTION}"
        else
            echo "⏳ Изменения обнаружены, но архив недавно создан (${time_since_last} сек назад). Пропуск..."
        fi
    done
else
    echo "⚠️  fswatch не установлен. Используется альтернативный метод..."
    echo "💡 Для установки fswatch: brew install fswatch"
    echo ""
    
    # Альтернативный метод: проверка времени модификации файлов
    echo "📊 Отслеживание изменений через проверку времени модификации..."
    
    while true; do
        # Проверяем основные файлы проекта
        for file in "${PROJECT_DIR}/index.html" "${PROJECT_DIR}/app.js" "${PROJECT_DIR}/sw.js" "${PROJECT_DIR}/manifest.json"; do
            if [ -f "$file" ]; then
                file_time=$(stat -f %m "$file" 2>/dev/null || stat -c %Y "$file" 2>/dev/null)
                current_time=$(date +%s)
                
                if [ -n "$file_time" ] && [ $((current_time - file_time)) -lt 5 ]; then
                    time_since_last=$((current_time - LAST_ARCHIVE_TIME))
                    
                    if [ $time_since_last -ge $DEBOUNCE_SECONDS ]; then
                        create_archive "${DEFAULT_DESCRIPTION}"
                        sleep 5  # Небольшая пауза после создания архива
                    fi
                    break
                fi
            fi
        done
        
        sleep 2  # Проверка каждые 2 секунды
    done
fi

