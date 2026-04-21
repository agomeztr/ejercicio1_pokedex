# Ejercicio 1 Pokédex (Ainhoa)

## Configuración del entorno

Como ya teníamos previamente instalado VSCode, con sus respectivos plugings e instalado WSL y DDEV, solo sería montar el proyecto

### Montar el proyecto

Para poder montar el proyecto, dentro de la ruta correspondiente donde tengo mi DDEV, realizado el comando 
> mkdir ejercicio1_AinhoaGomez

En mi caso le he puesto de nombre a la carpeta ejercicio1_AinhoaGomez

A continuación, he abierto VSCode, he pulsado sobre el botón "Open a remote Window", y he seleccionado las siguientes opciones:
- Connect to WSL using Distro...
- DDEV

Una vez se carge la ventana de WSL, abrimos la carpeta que hemos creado en el paso anterior, en mi caso es la carpeta ejercicio1_AinhoaGomez

Abrimos una nueva terminal en VSCode dentro de la carpeta que hemos abrierto y ejecutamos el sigueinte comando:
> ddev config

Lo primero que nos pide es el nombre del proyecto, yo le he puesto Pokedex. Después, nos pide el documento root del proyecto, siempre va a ser web. Especificamos la versión de drupal, en mi caso puse drupal11.

Después de configurar la carpeta, debemos ejecutar los siguientes comandos:
> ddev start
> ddev composer create "drupal/recommended-project"

### Instalación de Drupal en el proyecto

Ahora debemos volver a ejecutar el comando 
> ddev start / ddev st

Para arrancar nuestro proyecto. Una vez arrancado, debemos pulsar sobre el enlace que nos aparece en la tabla, en la fila de web. Se nos abrirá en el navegador con la instalación de Drupal. En ella se configura el idioma, el correo, el nombre del administrador, el nombre del sitio, etc.

Y ya tendríamos nuestro proyecto instalado y configurado.

## Subir el poryecto a git

Para comenzar, he abierto GitHub con mi cuenta y he creado un nuevo repositorio para este ejercicio 1.
