# Aplicación para la crecion de Tests👤

![App en Funcionamiento](https://github.com/Sebastian-Paucar/AplicativoPreguntas/blob/main/img/image1.png)


## Requisitos Previos

Para ejecutar esta aplicación, necesitarás tener instalado lo siguiente en tu sistema:

1. **Node.js:** Node.js es un entorno de ejecución para JavaScript construido en el motor de JavaScript V8 de Chrome. Se utiliza para construir aplicaciones de red rápidas y escalables. Puedes descargarlo desde [la página oficial de Node.js](https://nodejs.org/).

2. **npm (Node Package Manager):** npm es el sistema de gestión de paquetes por defecto para Node.js. Se instala junto con Node.js, por lo que si ya tienes Node.js instalado, probablemente ya tengas npm.

3. **Git:** Git es un sistema de control de versiones distribuido gratuito y de código abierto diseñado para manejar todo, desde proyectos pequeños hasta muy grandes, con velocidad y eficiencia. Puedes descargarlo desde [la página oficial de Git](https://git-scm.com/).

Una vez que hayas instalado estos requisitos previos, puedes clonar el repositorio y ejecutar `npm install` para instalar todas las dependencias necesarias para la aplicación.


- **frontend/**: Esta carpeta contiene todos los archivos relacionados con la interfaz de usuario de la aplicación, incluyendo los componentes de React y el punto de entrada de la aplicación (`index.js`).

- **backend/**: Esta carpeta contiene todos los archivos relacionados con el servidor de la aplicación, incluyendo las rutas, la interacción con la base de datos y el archivo del servidor (`server.js`).

- **database/**: Esta carpeta contiene los archivos que simulan la base de datos de la aplicación. Aquí se almacenan los datos de los perros, adoptantes y adopciones en archivos JSON. Esta capa se encarga de interactuar con estos archivos para almacenar y recuperar datos, simulando la interacción con una base de datos real.

## Implementación Paso a Paso

### 1. Clona el Repositorio

Primero, necesitas clonar el repositorio en tu máquina local. Puedes hacerlo con el siguiente comando:

```bash
https://github.com/Sebastian-Paucar/AplicativoPreguntas
cd AplicativoPreguntas
```

### 2. Instala las Dependencias

Una vez que hayas clonado el repositorio, necesitas instalar las dependencias necesarias para la aplicación. Esto se puede hacer con el comando `npm install` en ambas carpetas, `frontend` y `backend`:

```bash
cd frontend
npm install
cd ../backend
npm install
```

### 3. Ejecuta la Aplicación

Finalmente, puedes ejecutar la aplicación. Necesitarás ejecutar el servidor backend y la aplicación frontend en terminales separados:

```bash
# Terminal 1
cd backend
npm start

# Terminal 2
cd frontend
npm run dev
```

Ahora, deberías poder ver la aplicación en tu navegador en `http://localhost:5173`.

### Nota

Al momento de agregar otra evaluación, hay que refrescar la página para que se vizualice correctamente.

