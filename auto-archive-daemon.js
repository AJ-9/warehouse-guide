#!/usr/bin/env node

// Автоматический демон для архивирования при каждом изменении файлов
// Запускается автоматически и работает в фоне

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutoArchiveDaemon {
    constructor() {
        this.projectDir = __dirname;
        this.desktopDir = path.join(path.dirname(this.projectDir));
        this.logFile = path.join(this.projectDir, 'archive-log.txt');
        this.lockFile = path.join(this.projectDir, '.archive-lock');
        this.pidFile = path.join(this.projectDir, '.archive-daemon.pid');
        this.lastArchiveTime = 0;
        this.debounceSeconds = 10; // Минимальный интервал между архивами (10 секунд)
        this.watchedFiles = [
            path.join(this.projectDir, 'app.js'),
            path.join(this.projectDir, 'index.html'),
            path.join(this.projectDir, 'sw.js'),
            path.join(this.projectDir, 'manifest.json')
        ];
    }

    createArchive(description = 'auto-change') {
        const currentTime = Math.floor(Date.now() / 1000);
        const timeSinceLast = currentTime - this.lastArchiveTime;

        if (timeSinceLast < this.debounceSeconds) {
            return;
        }

        // Проверка блокировки
        if (fs.existsSync(this.lockFile)) {
            try {
                const pid = parseInt(fs.readFileSync(this.lockFile, 'utf8'));
                if (process.kill(pid, 0)) {
                    return; // Другой процесс уже создает архив
                }
            } catch (e) {
                // Процесс не существует, продолжаем
            }
        }

        // Создаем lock
        fs.writeFileSync(this.lockFile, process.pid.toString());

        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
            const archiveName = `warehouse-guide-${description}-${timestamp}.zip`;
            const archivePath = path.join(this.desktopDir, archiveName);

            const command = `cd "${this.desktopDir}" && zip -r "${archiveName}" "warehouse-guide-corrected 2" -x "*.DS_Store" "*/.*" "*/node_modules/*" "warehouse-guide-corrected 2/*.zip" > /dev/null 2>&1`;
            
            execSync(command, { stdio: 'pipe' });

            const stats = fs.statSync(archivePath);
            const size = this.formatBytes(stats.size);

            // Записываем в лог
            const logEntry = `${new Date().toISOString()} - ${description} - ${archiveName} (${size})\n`;
            fs.appendFileSync(this.logFile, logEntry);

            this.lastArchiveTime = currentTime;
            
            console.log(`✅ Архив создан: ${archiveName} (${size})`);

        } catch (error) {
            console.error('❌ Ошибка при создании архива:', error.message);
        } finally {
            // Удаляем lock
            if (fs.existsSync(this.lockFile)) {
                fs.unlinkSync(this.lockFile);
            }
        }
    }

    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    startWatching() {
        console.log('👀 Запуск автоматического мониторинга файлов...');
        console.log('📁 Отслеживаемые файлы:');
        this.watchedFiles.forEach(file => {
            console.log(`   - ${path.basename(file)}`);
        });
        console.log(`⏱️  Интервал между архивами: ${this.debounceSeconds} секунд`);
        console.log('🛑 Для остановки удалите файл .archive-daemon.pid или нажмите Ctrl+C\n');

        // Сохраняем PID
        fs.writeFileSync(this.pidFile, process.pid.toString());

        // Отслеживаем изменения файлов
        const watchers = new Map();

        this.watchedFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const watcher = fs.watch(file, { persistent: true }, (eventType) => {
                    if (eventType === 'change') {
                        this.createArchive('auto-change');
                    }
                });
                watchers.set(file, watcher);
            }
        });

        // Также отслеживаем всю директорию для новых файлов
        const dirWatcher = fs.watch(this.projectDir, { persistent: true, recursive: false }, (eventType, filename) => {
            if (filename && (filename.endsWith('.js') || filename.endsWith('.html') || filename.endsWith('.json'))) {
                if (!filename.includes('archive') && !filename.includes('.zip')) {
                    this.createArchive('auto-change');
                }
            }
        });

        // Обработка завершения
        process.on('SIGINT', () => {
            console.log('\n🛑 Остановка мониторинга...');
            watchers.forEach(watcher => watcher.close());
            dirWatcher.close();
            if (fs.existsSync(this.pidFile)) {
                fs.unlinkSync(this.pidFile);
            }
            process.exit(0);
        });

        process.on('SIGTERM', () => {
            watchers.forEach(watcher => watcher.close());
            dirWatcher.close();
            if (fs.existsSync(this.pidFile)) {
                fs.unlinkSync(this.pidFile);
            }
            process.exit(0);
        });

        console.log('✅ Мониторинг активен. Изменения файлов будут автоматически архивироваться.\n');
    }
}

// Запуск
if (require.main === module) {
    const daemon = new AutoArchiveDaemon();
    daemon.startWatching();
    
    // Держим процесс активным
    setInterval(() => {
        // Проверяем, что PID файл существует
        if (!fs.existsSync(daemon.pidFile)) {
            process.exit(0);
        }
    }, 5000);
}

module.exports = AutoArchiveDaemon;

