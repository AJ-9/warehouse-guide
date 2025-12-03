// Автоматическое создание архива после изменений
// Использование: node auto-archive.js [описание изменений]

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

class AutoArchiver {
    constructor() {
        this.projectDir = __dirname;
        this.desktopDir = path.join(path.dirname(this.projectDir));
        this.logFile = path.join(this.projectDir, 'archive-log.txt');
    }

    createArchive(description = 'updated') {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const archiveName = `warehouse-guide-${description}-${timestamp}.zip`;
        const archivePath = path.join(this.desktopDir, archiveName);

        console.log(`🔄 Создание архива: ${archiveName}`);
        console.log(`📁 Исходная папка: ${this.projectDir}`);
        console.log(`💾 Путь к архиву: ${archivePath}`);

        try {
            // Создаем архив
            const command = `cd "${this.desktopDir}" && zip -r "${archiveName}" "warehouse-guide-corrected 2" -x "*.DS_Store" "*/.*" "*/node_modules/*" "warehouse-guide-corrected 2/.DS_Store" "warehouse-guide-corrected 2/images/.DS_Store"`;
            
            execSync(command, { stdio: 'pipe' });

            // Получаем размер архива
            const stats = fs.statSync(archivePath);
            const archiveSize = this.formatBytes(stats.size);

            console.log('✅ Архив успешно создан!');
            console.log(`📊 Размер: ${archiveSize}`);
            console.log(`📅 Дата: ${new Date().toLocaleString('ru-RU')}`);
            console.log(`📂 Расположение: ${archivePath}`);

            // Показываем содержимое архива
            console.log('\n📋 Основные файлы в архиве:');
            const listCommand = `unzip -l "${archivePath}" | grep -E "(app\\.js|index\\.html|sw\\.js|manifest\\.json|README\\.md|CHANGES\\.md)"`;
            try {
                const output = execSync(listCommand, { encoding: 'utf8' });
                console.log(output);
            } catch (e) {
                console.log('Не удалось показать содержимое архива');
            }

            // Записываем в лог
            this.logArchive(description, archiveName, archiveSize);

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

    showLog() {
        try {
            if (fs.existsSync(this.logFile)) {
                const logContent = fs.readFileSync(this.logFile, 'utf8');
                console.log('📋 История архивов:');
                console.log(logContent);
            } else {
                console.log('📋 Лог архивов пуст');
            }
        } catch (error) {
            console.error('Ошибка чтения лога:', error.message);
        }
    }
}

// Запуск скрипта
if (require.main === module) {
    const archiver = new AutoArchiver();
    const description = process.argv[2] || 'updated';
    
    if (description === '--log') {
        archiver.showLog();
    } else {
        archiver.createArchive(description);
    }
}

module.exports = AutoArchiver;
