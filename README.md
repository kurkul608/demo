# Для разворачивание через Docker

1. Установить [Docker](https://www.docker.com) (Edge Channel)

   **ТОЛЬКО ДЛЯ WINDOWS** Установить Git Bash

   **ТОЛЬКО ДЛЯ LINUX** Установить [Docker Compose](https://github.com/docker/compose/releases)

   **Если хотите использовать WSL** [Docker for WSL 2](https://docs.docker.com/docker-for-windows/wsl/)
2. Клонировать проект

[comment]: <> (3. Создать локальный файл .env и заполнить его данными)

[comment]: <> (   ```)

[comment]: <> (   cp .env.dist .env)

[comment]: <> (   ```)
3. Запустить внутри директории проекта

   **Для dev сервера**
   ```
   docker-compose -f docker-compose.develop.yml up --build -d
   ```

   **Для prod сервера**
   ```
   docker-compose -f docker-compose.prod.yml up --build -d
   ```