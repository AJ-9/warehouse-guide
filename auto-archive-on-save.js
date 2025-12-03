// Автоматическое создание архива при сохранении файлов
// Использование: node auto-archive-on-save.js [описание]
// Или добавьте в настройки редактора как команду после сохранения

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

class AutoArchiveOnSave {
    constructor() {
        this.projectDir = __dirname;
        this.desktopDir = path.join(path.dirname(this.projectDir));
        this.logFile = path.join(this.projectDir, 'archive-log.txt');
        this.lastArchiveTime = 0;
        this.debounceSeconds = 30; // Минимальный интервал между архивами
    }

    createArchive(description = 'auto-save') {
        const currentTime = Math.floor(Date.now() / 1000);
        const timeSinceLast = currentTime - this.lastArchiveTime;

        if (timeSinceLast < this.debounceSeconds) {
            console.log(`⏳ Архив недавно создан (${timeSinceLast} сек назад). Пропуск...`);
            return;
        }

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const archiveName = `warehouse-guide-${description}-${timestamp}.zip`;
        const archivePath = path.join(this.desktopDir, archiveName);

        console.log(`🔄 Создание архива: ${archiveName}`);

        try {
            const command = `cd "${this.desktopDir}" && zip -r "${archiveName}" "warehouse-guide-corrected 2" -x "*.DS_Store" "*/.*" "*/node_modules/*" "warehouse-guide-corrected 2/.DS_Store" "warehouse-guide-corrected 2/images/.DS_Store"`;
            
            execSync(command, { stdio: 'pipe' });

            const stats = fs.statSync(archivePath);
            const archiveSize = this.formatBytes(stats.size);

            console.log('✅ Архив успешно создан!');
            console.log(`📊 Размер: ${archiveSize}`);
            console.log(`📅 Дата: ${new Date().toLocaleString('ru-RU')}`);
            console.log(`📂 Расположение: ${archivePath}`);

            this.logArchive(description, archiveName, archiveSize);
            this.lastArchiveTime = currentTime;

            return {
                success: true,
                archiveName,
                archivePath,
                size: archiveSize
            };

        } catch (error) {
            console.error('❌ Ошибка при создании архива:', error.message);
            return {
                success: false,
                error: error.message
            };
        }
    }

    logArchive(description, archiveName, size) {
        const logEntry = `${new Date().toISOString()} - ${description} - ${archiveName} (${size})\n`;
        
        try {
            fs.appendFileSync(this.logFile, logEntry);
            console.log(`📝 Запись добавлена в лог: ${this.logFile}`);
        } catch (error) {
            console.error('Ошибка записи в лог:', error.message);
        }
    }

    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
}

// Запуск скрипта
if (require.main === module) {
    const archiver = new AutoArchiveOnSave();
    const description = process.argv[2] || 'auto-save';
    archiver.createArchive(description);
}

module.exports = AutoArchiveOnSave;

