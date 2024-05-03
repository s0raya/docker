# Instalación WINDOWS, LINUX y MAC

## Docker Desktop
- https://www.docker.com/products/docker-desktop/

## Docker Compose
Con Windows viene instalado por defecto con docker desktop

### Instalación Linux y Mac

Pega y ejecuta las siguientes líneas en tu terminal

## Instala la última versión del repositorio
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

Pedirá contraseña. Al ser sudo es la contraseña de tu usurario del ordenador.

## Asigna permisos de ejecución al archivo descargado:
sudo chmod +x /usr/local/bin/docker-compose

## verificamos que está instalado
docker-compose --version

*** Advertencia ***
Para que Docker funcione correctamente siempre tendremos que tenerlo activo, es decir, que Docker Desktop esté ejecutándose.

## ENLACES DE INTERÉS
- https://www.docker.com/products/docker-desktop/
- https://hub.docker.com/

