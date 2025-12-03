#!/bin/bash

# Скрипт для создания архива после подтверждения изменений
# Использование: ./create-archive.sh [описание изменений]

PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
DESKTOP_DIR="/Users/alikbidzhiev/Desktop"
LOG_FILE="${PROJECT_DIR}/archive-log.txt"
LOCK_FILE="${PROJECT_DIR}/.archive-lock"

# Описание изменений (по умолчанию "confirmed-update")
DESCRIPTION=${1:-"confirmed-update"}

# Функция создания архива
create_archive() {
    local desc=$1
    
    # Проверка блокировки
    if [ -f "$LOCK_FILE" ]; then
        local lock_pid=$(cat "$LOCK_FILE" 2>/dev/null)
        if [ -n "$lock_pid" ] && ps -p "$lock_pid" > /dev/null 2>&1; then
            echo "⏳ Архивация уже выполняется другим процессом..."
            return 1
        fi
    fi
    
    # Создаем lock
    echo $$ > "$LOCK_FILE"
    
    local timestamp=$(date +%Y%m%d-%H%M%S)
    local archive_name="warehouse-guide-${desc}-${timestamp}.zip"
    local archive_path="${DESKTOP_DIR}/${archive_name}"
    
    echo "📦 Создание архива: ${archive_name}..."
    
    cd "${DESKTOP_DIR}"
    zip -r "${archive_name}" "warehouse-guide-corrected 2" \
        -x "*.DS_Store" "*/.*" "*/node_modules/*" \
    -x "warehouse-guide-corrected 2/.DS_Store" \
        -x "warehouse-guide-corrected 2/images/.DS_Store" \
        -x "warehouse-guide-corrected 2/*.zip" \
        > /dev/null 2>&1
    
if [ $? -eq 0 ]; then
        local size=$(ls -lh "${archive_path}" | awk '{print $5}')
        echo "✅ Архив создан: ${archive_name} (${size})"
        echo "$(date '+%Y-%m-%d %H:%M:%S') - ${desc} - ${archive_name} (${size})" >> "${LOG_FILE}"
        
        # Удаляем lock
        rm -f "$LOCK_FILE"
        return 0
else
        echo "❌ Ошибка при создании архива"
        rm -f "$LOCK_FILE"
        return 1
fi
}

# Запуск архивации
create_archive "$DESCRIPTION"
