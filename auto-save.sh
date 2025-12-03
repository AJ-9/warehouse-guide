#!/bin/bash

# Автоматическое сохранение архива после изменений
# Использование: ./auto-save.sh "описание изменений"

DESCRIPTION=${1:-"auto-save"}
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
ARCHIVE_NAME="warehouse-guide-${DESCRIPTION}-${TIMESTAMP}.zip"

echo "💾 Автоматическое сохранение: ${ARCHIVE_NAME}"

cd "/Users/alikbidzhiev/Desktop"
zip -r "${ARCHIVE_NAME}" "warehouse-guide-corrected 2" -x "*.DS_Store" "*/.*" "warehouse-guide-corrected 2/auto-save.sh" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    SIZE=$(ls -lh "${ARCHIVE_NAME}" | awk '{print $5}')
    echo "✅ Архив сохранен: ${ARCHIVE_NAME} (${SIZE})"
    echo "📅 $(date '+%Y-%m-%d %H:%M:%S')"
    echo "📝 Описание: ${DESCRIPTION}"
    
    # Записываем в лог
    echo "$(date '+%Y-%m-%d %H:%M:%S') - ${DESCRIPTION} - ${ARCHIVE_NAME} (${SIZE})" >> "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2/archive-log.txt"
else
    echo "❌ Ошибка создания архива"
    exit 1
fi
