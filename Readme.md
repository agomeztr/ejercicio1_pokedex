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

Ahora debemos volver a ejecutar uno de los dos comando siguientes:
> ddev start

>  ddev st

Para arrancar nuestro proyecto. Una vez arrancado, debemos pulsar sobre el enlace que nos aparece en la tabla, en la fila de web. Se nos abrirá en el navegador con la instalación de Drupal. En ella se configura el idioma, el correo, el nombre del administrador, el nombre del sitio, etc.

Y ya tendríamos nuestro proyecto instalado y configurado.

## Subir el proyecto a git

Para comenzar, he abierto GitHub con mi cuenta y he creado un nuevo repositorio para este ejercicio 1. Una vez que tengo el repositorio creado, nos volvemos a la terminal de VSCode del proyecto y realizamos los siguientes comandos:

> git init

> git add .

> git commit -m "Start project"

(O el texto que quieras ponerle al commit)

> git branch -M main

> git remote add origin url

Debemos de sustituir la url, por la url del repositorio de GitHub

> git push -u origin main

## Código

### Decisiones

He tenido que realizar un módulo personalizado para poder realizar una página dinámica, en este caso la página de la pokédex. Con php he impreso todas las etiquetas html que quería que se mostraran en mi página, el div que lo contuviera todo, la foto de la pokedex, la imagen del pokemon, los botones, etc. A partir de imprimir con php las etiquetas (con sus id y algunas clases), he añadido mi propia librería de js que he creado.

Para ello, igual que he hehco con el módulo personalizado, he tenido que hacer una librería personalizada, la cual he denominado como "pokedex", en esta está toda la lógica de la pokédex; es decir, listar 10 pokemons, poder cambiar a los 10 siguientes o a los 10 anteriores, si pulsar sobre un nombre de pokemon te muestra todos los detalles, etc. 

Además, en el módulo php he tenido que indicarle que todas las etiquetas que me imprimiera, no me las restrinja.  

### Limitaciones

Al no poder utilizar IA he invertido mucho tiempo en solucionar los errores ya que, o no sabía por qué fallaba o no entendía por qué me daba el error. Además, he de añadir que no ha habido mucha información a encontrar en internet sobre drupal 11 para poder solucionar mis errores y/o dudas, por lo que muchas de las dudas me las ha tenido que resolver mi tutor.