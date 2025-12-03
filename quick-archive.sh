#!/bin/bash

# Быстрое создание архива с описанием изменений
# Использование: ./quick-archive.sh "описание изменений"

DESCRIPTION=${1:-"quick-update"}
TIMESTAMP=$(date +%Y%m%d-%H%M)
ARCHIVE_NAME="warehouse-guide-${DESCRIPTION}-${TIMESTAMP}.zip"

echo "🚀 Быстрое создание архива: ${ARCHIVE_NAME}"

cd "/Users/alikbidzhiev/Desktop"
zip -r "${ARCHIVE_NAME}" "warehouse-guide-corrected 2" -x "*.DS_Store" "*/.*" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    SIZE=$(ls -lh "${ARCHIVE_NAME}" | awk '{print $5}')
    echo "✅ Готово! ${ARCHIVE_NAME} (${SIZE})"
    echo "📅 $(date '+%H:%M:%S')"
else
    echo "❌ Ошибка создания архива"
fi
