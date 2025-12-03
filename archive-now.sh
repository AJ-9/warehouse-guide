#!/bin/bash

# Простой скрипт для быстрого создания архива
# Использование: ./archive-now.sh [описание]

DESCRIPTION=${1:-"update"}
cd "/Users/alikbidzhiev/Desktop/warehouse-guide-corrected 2"
./auto-archive-on-change.sh "$DESCRIPTION"

