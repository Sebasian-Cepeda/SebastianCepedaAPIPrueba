# Sebastian Cepeda Spring Boot API

Este proyecto es una aplicación que utiliza Spring Boot para el backend y React para el frontend. Maven es usado como gestor de dependencias y construcción para el backend.

## Tecnologías utilizadas

- **Backend**: Spring Boot (Java)
- **Frontend**: React (JavaScript)
- **BD**: Oracle (SQL)
- **Gestor de dependencias**: Maven

## Requisitos previos
Asegúrate de tener instalados los siguientes programas:

- [Java 17 o superior](https://adoptopenjdk.net/)
- [Maven](https://maven.apache.org/)
- [Node.js y npm](https://nodejs.org/) (para React)
- [Git](https://git-scm.com/)

## Pasos para clonar el repositorio y ejecutar el proyecto

### 1. Clonar el repositorio

Clonar el repositorio en la máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/tu_usuario/SebastianCepedaAPIPrueba.git
```
### 2. abrir el repositorio en su editor de preferencia

### 3. entrar a la siguiente ruta 
```bash
cd back
```
### 4.poner los siguientes comando 
```bash
mvn clean install
mvn spring-boot:run
```
luego podemos hacer las pruebas con postam en la siguiente URL
```bash
http://localhost:8080/usuarios (get para ver todos los usuarios dentro de la tabla)
http://localhost:8080/usuarios (post para crear un usuario por lo que en el body de la petición debe estar el Usuario)
http://localhost:8080/usuarios/{id} (put para actualizar un Usuario con un id especifico)
http://localhost:8080/usuarios{id} (delete para eliminar un usuario con un id especifico)
```
### 5.Si queremos usar la interfaz grafica con react se debe entrar a la siguiente ruta
```bash
cd frontend
```
### 6.poner los siguientes comando 
```bash
npm install
npm start
```
### 7.abrir
```bash
http://localhost:3000/
```


