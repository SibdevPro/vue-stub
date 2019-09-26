# Для запуска в режиме разработки

1. Старт контейнера `docker-compose up`

----------------------------------

# Решение проблем

Если получили ошибку типа:

```
frontend_1  | Found bindings for the following environments:
frontend_1  |   - OS X 64-bit with Node.js 10.x
frontend_1  | 
frontend_1  | This usually happens because your environment has changed since running `npm install`.
frontend_1  | Run `npm rebuild node-sass` to download the binding for your current environment.
```

Выполните `docker-compose exec frontend npm rebuild node-sass`