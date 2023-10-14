# adminSys2023

Administración de Sistemas 2023 - Universidad del Valle de Guatemala

## Important Scripts:

-   npm run dev: Starts a new nodemon instance for live development.
-   npm run test: Runs jest

## Docker Commands:

### Construir la imagen del backend:

```
docker build -f Dockerfile -t backend:test .
```

### Crear un container del backend:

```
docker run -d -it --rm -p 3000:3000 --name backend backend:test
```
