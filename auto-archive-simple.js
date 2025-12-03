// Простой скрипт для автоматического создания архива
// Можно вызывать из командной строки или интегрировать в другие процессы

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const PROJECT_DIR = __dirname;
const DESKTOP_DIR = path.join(path.dirname(PROJECT_DIR));
const LOG_FILE = path.join(PROJECT_DIR, 'archive-log.txt');
const LOCK_FILE = path.join(PROJECT_DIR, '.archive-lock');

// Проверка блокировки
if (fs.existsSync(LOCK_FILE)) {
    try {
        const pid = parseInt(fs.readFileSync(LOCK_FILE, 'utf8'));
        // Проверяем, существует ли процесс
        try {
            process.kill(pid, 0);
            // Процесс существует, выходим
            process.exit(0);
        } catch (e) {
            // Процесс не существует, удаляем lock файл
            fs.unlinkSync(LOCK_FILE);
        }
    } catch (e) {
        // Игнорируем ошибки
    }
}

// Создаем lock файл
fs.writeFileSync(LOCK_FILE, process.pid.toString());

// Очистка при выходе
process.on('exit', () => {
    if (fs.existsSync(LOCK_FILE)) {
        fs.unlinkSync(LOCK_FILE);
    }
});

const description = process.argv[2] || 'auto-change';
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const archiveName = `warehouse-guide-${description}-${timestamp}.zip`;
const archivePath = path.join(DESKTOP_DIR, archiveName);

try {
    console.log(`🔄 Создание архива: ${archiveName}`);
    
    const command = `cd "${DESKTOP_DIR}" && zip -r "${archiveName}" "warehouse-guide-corrected 2" -x "*.DS_Store" "*/.*" "*/node_modules/*" "warehouse-guide-corrected 2/*.zip" > /dev/null 2>&1`;
    
    execSync(command, { stdio: 'pipe' });
    
    const stats = fs.statSync(archivePath);
    const size = formatBytes(stats.size);
    
    // Записываем в лог
    const logEntry = `${new Date().toISOString()} - ${description} - ${archiveName} (${size})\n`;
    fs.appendFileSync(LOG_FILE, logEntry);
    
    console.log(`✅ Архив создан: ${archiveName} (${size})`);
    
} catch (error) {
    console.error('❌ Ошибка при создании архива:', error.message);
    process.exit(1);
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

