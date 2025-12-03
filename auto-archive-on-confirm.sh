#!/bin/bash

# Автоматическая архивация после подтверждения изменений
# Отслеживает сохранение файлов и создает архив после подтверждения

PROJECT_DIR="/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
DESKTOP_DIR="/Users/alikbidzhiev/Desktop"
LOG_FILE="${PROJECT_DIR}/archive-log.txt"
LOCK_FILE="${PROJECT_DIR}/.archive-lock"
CONFIRM_FILE="${PROJECT_DIR}/.last-confirm"
PID_FILE="${PROJECT_DIR}/.archive-confirm.pid"

# Время ожидания подтверждения (секунды)
CONFIRM_DELAY=5

# Функция создания архива
create_archive() {
    local desc=$1
    
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
    local archive_name="warehouse-guide-confirmed-${timestamp}.zip"
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
        local file_count=$(unzip -l "${archive_path}" 2>/dev/null | tail -1 | awk '{print $2}')
        local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
        
        # Записываем в лог архивации
        echo "${timestamp} - confirmed - ${archive_name} (${size}, ${file_count} файлов)" >> "${LOG_FILE}"
        
        # Формируем статус архивации
        status_msg="
╔══════════════════════════════════════════════════════════╗
║          ✅ АРХИВАЦИЯ УСПЕШНО ЗАВЕРШЕНА                  ║
╠══════════════════════════════════════════════════════════╣
║ 📦 Имя архива: ${archive_name}
║ 📁 Расположение: ${DESKTOP_DIR}
║ 📊 Размер: ${size}
║ 📄 Файлов в архиве: ${file_count}
║ 🕐 Время создания: ${timestamp}
╚══════════════════════════════════════════════════════════╝
"
        
        # Выводим статус в лог и консоль
        echo "$status_msg" >> /tmp/archive-confirm.log
        echo "$status_msg" >&2  # Вывод в stderr для видимости в терминале
        
    else
        local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
        error_msg="
╔══════════════════════════════════════════════════════════╗
║              ❌ ОШИБКА АРХИВАЦИИ                         ║
╠══════════════════════════════════════════════════════════╣
║ ⏰ Время: ${timestamp}
║ 📝 Не удалось создать архив: ${archive_name}
║ 💡 Проверьте права доступа и место на диске
╚══════════════════════════════════════════════════════════╝
"
        echo "$error_msg" >> /tmp/archive-confirm.log
        echo "$error_msg" >&2
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

# Сохраняем PID (если еще не сохранен)
if [ ! -f "$PID_FILE" ]; then
    echo $$ > "$PID_FILE"
fi

# Обработка завершения
cleanup() {
    rm -f "$PID_FILE"
    rm -rf "$LAST_MOD_DIR"
    exit 0
}

trap cleanup SIGINT SIGTERM

echo "👀 Мониторинг подтверждений изменений..." | tee -a /tmp/archive-confirm.log
echo "⏱️  Задержка подтверждения: ${CONFIRM_DELAY} секунд" | tee -a /tmp/archive-confirm.log
echo "✅ Автоматическая архивация активна" | tee -a /tmp/archive-confirm.log
echo "$(date '+%Y-%m-%d %H:%M:%S') - Запуск мониторинга файлов:" >> /tmp/archive-confirm.log
for file in "${WATCHED_FILES[@]}"; do
    echo "   - $(basename "$file")" >> /tmp/archive-confirm.log
done
echo "" | tee -a /tmp/archive-confirm.log

# Храним время последнего изменения каждого файла (используем временные файлы вместо ассоциативных массивов)
LAST_MOD_DIR="${PROJECT_DIR}/.archive-last-mod"

# Создаем директорию для хранения временных меток
mkdir -p "$LAST_MOD_DIR"

# Функция получения времени модификации файла
get_file_time() {
    local file="$1"
    if [ -f "$file" ]; then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            stat -f %m "$file" 2>/dev/null
        else
            stat -c %Y "$file" 2>/dev/null
        fi
    fi
}

# Функция сохранения времени модификации
save_file_time() {
    local file="$1"
    local time=$(get_file_time "$file")
    if [ -n "$time" ]; then
        echo "$time" > "${LAST_MOD_DIR}/$(basename "$file" | tr '/' '_')"
    fi
}

# Функция получения сохраненного времени модификации
get_saved_time() {
    local file="$1"
    local time_file="${LAST_MOD_DIR}/$(basename "$file" | tr '/' '_')"
    if [ -f "$time_file" ]; then
        cat "$time_file" 2>/dev/null
    fi
}

# Инициализация времени модификации
for file in "${WATCHED_FILES[@]}"; do
    save_file_time "$file"
done

# Основной цикл мониторинга
while true; do
    # Проверяем, что PID файл существует
    if [ ! -f "$PID_FILE" ]; then
        break
    fi
    
    # Проверяем изменения файлов
    file_changed=false
    for file in "${WATCHED_FILES[@]}"; do
        current_time=$(get_file_time "$file")
        saved_time=$(get_saved_time "$file")
        
        if [ -n "$current_time" ] && [ "$current_time" != "$saved_time" ]; then
            echo "$(date '+%Y-%m-%d %H:%M:%S') - Изменен файл: $(basename "$file") (было: $saved_time, стало: $current_time)" >> /tmp/archive-confirm.log
            save_file_time "$file"
            file_changed=true
        fi
    done
    
    # Если файл изменился, ждем подтверждения
    if [ "$file_changed" = true ]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - Обнаружено изменение, ожидание подтверждения..." >> /tmp/archive-confirm.log
        sleep $CONFIRM_DELAY
        
        # Проверяем, не было ли новых изменений за время ожидания
        still_changed=false
        for file in "${WATCHED_FILES[@]}"; do
            check_time=$(get_file_time "$file")
            saved_time=$(get_saved_time "$file")
            
            if [ "$check_time" != "$saved_time" ]; then
                still_changed=true
                save_file_time "$file"
            fi
        done
        
        # Если за время ожидания не было новых изменений - это подтверждение
        if [ "$still_changed" = false ]; then
            echo "$(date '+%Y-%m-%d %H:%M:%S') - ✅ Изменения подтверждены, запуск архивации..." >> /tmp/archive-confirm.log
            echo "$(date '+%Y-%m-%d %H:%M:%S') - 📦 Начало создания архива..." >> /tmp/archive-confirm.log
            create_archive "confirmed"
        else
            echo "$(date '+%Y-%m-%d %H:%M:%S') - ⏳ Продолжаются изменения, ожидание..." >> /tmp/archive-confirm.log
        fi
    fi
    
    sleep 2
done

cleanup

