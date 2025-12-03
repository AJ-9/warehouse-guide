# ⚡ Быстрая настройка автоматической отправки

## Самый простой способ

### 1. Добавьте алиас в ваш shell

Откройте файл `~/.zshrc` (или `~/.bashrc` если используете bash):

```bash
nano ~/.zshrc
```

Добавьте в конец файла:

```bash
# Автоматическая отправка warehouse-guide на GitHub
alias wpush='cd "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2" && ./push'
```

Сохраните и выполните:
```bash
source ~/.zshrc
```

### 2. Использование

Теперь из **любой директории** просто выполните:

```bash
wpush "Описание изменений"
```

Или без описания (автоматическое):
```bash
wpush
```

---

## Альтернативные варианты

### Вариант A: Создать символическую ссылку в PATH

```bash
sudo ln -s "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2/push" /usr/local/bin/wpush
```

Теперь можно использовать `wpush` из любой директории.

### Вариант B: Добавить директорию в PATH

Добавьте в `~/.zshrc`:
```bash
export PATH="$PATH:/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
```

Теперь можно использовать `./push` из любой директории.

---

## Автоматическая отправка при каждом коммите

**Уже настроено!** Git hook автоматически отправляет изменения после каждого `git commit`.

Просто используйте:
```bash
cd "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
git add .
git commit -m "Ваше сообщение"
# Автоматически выполнится: git push origin main
```

---

## Фоновый мониторинг (опционально)

Для автоматической отправки при сохранении файлов:

```bash
cd "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
./auto-push-on-change.sh &
```

Остановка:
```bash
./stop-auto-push.sh
```

---

## Проверка работы

```bash
# Проверить статус
cd "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
git status

# Посмотреть последние коммиты
git log --oneline -5

# Проверить подключение к GitHub
git remote -v
```

