#!/bin/bash

# Автоматическое создание архива при каждом изменении
# Этот скрипт вызывается автоматически при сохранении файлов

PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
DESKTOP_DIR="/Users/alikbidzhiev/Desktop"
LOG_FILE="${PROJECT_DIR}/archive-log.txt"
LOCK_FILE="${PROJECT_DIR}/.archive-lock"

# Предотвращаем одновременный запуск нескольких процессов
if [ -f "$LOCK_FILE" ]; then
    PID=$(cat "$LOCK_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        exit 0
    fi
fi

echo $$ > "$LOCK_FILE"

# Функция очистки lock файла
cleanup() {
    rm -f "$LOCK_FILE"
}
trap cleanup EXIT

# Получаем описание изменений (если передано)
DESCRIPTION=${1:-"auto-change"}

# Создаем временную метку
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
ARCHIVE_NAME="warehouse-guide-${DESCRIPTION}-${TIMESTAMP}.zip"
ARCHIVE_PATH="${DESKTOP_DIR}/${ARCHIVE_NAME}"

# Создаем архив
cd "${DESKTOP_DIR}"
zip -r "${ARCHIVE_NAME}" "warehouse-guide-corrected 2" \
    -x "*.DS_Store" "*/.*" "*/node_modules/*" \
    -x "warehouse-guide-corrected 2/.DS_Store" \
    -x "warehouse-guide-corrected 2/images/.DS_Store" \
    -x "warehouse-guide-corrected 2/*.zip" \
    > /dev/null 2>&1

if [ $? -eq 0 ]; then
    SIZE=$(ls -lh "${ARCHIVE_PATH}" | awk '{print $5}')
    
    # Записываем в лог
    echo "$(date '+%Y-%m-%d %H:%M:%S') - ${DESCRIPTION} - ${ARCHIVE_NAME} (${SIZE})" >> "${LOG_FILE}"
    
    # Выводим краткое сообщение (можно отключить для полной автоматизации)
    echo "✅ Архив создан: ${ARCHIVE_NAME} (${SIZE})"
else
    echo "❌ Ошибка создания архива"
    exit 1
fi

