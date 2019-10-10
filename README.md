# Burger Queen

## Idioma/Language
- [Español](#español)
- [English](#english)

---

## Español

## Índice

- [Introducción](#introduccion)
- [Definición del producto](#definición-del-producto)
- [Definición del usuario](#definición-del-usuario)
- [Historias de Usuario](#historias-de-usuario)
- [Prototipo y Diagrama de flujo](#prototipo-y-diagrama-de-flujo)
- [Documentación](#documentación)
- [Extras](#extras)


## Introducción
Este proyecto fue realizado durante el Bootcamp de Laboratoria, sede Guadalajara Generación 003, durante el reto de Burger Queen. 
La duración de este fue de 3 semanas divididas en sprints(uno por semana).
El equipo esta conformado por 4 estudiantes, mismas que se dividieron en actividades de Front-End y Back-End.
### Front-End:
- Karla Elizabeth Alvarez Castilla
- Gloria Ramírez Robles
### Back-End:
- Karina Lizbeth Cabrera Ruiz
- Brenda Lucero Vielmas García

Dentro de este repositorio se documenta la parte Front-End del proyecto.

## Definición del producto
Nuestro cliente es la cafetería Ne-koffe, un concepto en la ZMG donde puedes convivir con gatos durante tu estancia en ella. Como parte de su planeación de micro empresa, los dueños de Ne-koffe han solicitado la creación de una aplicación para tablets que pueda ser utilizada por sus meseros para tomar pedidos y emitir la comanda correspondiente al área de cocina. Esta aplicación debe cumplir con estos requisitos:
- Poder ser utilizada exclusivamente por el personal de la cafetería (por medio de un token)
- Permitir agregar productos del menú a la comanda
- Permitir eliminar productos de la comanda
- Editar una comanda ya existente
- Eliminar la comanda completa en caso de cancelación
- Enviar la comanda finalizada a cocina
- Separar las comandas por mesa atendida

Todo lo anterior debe ser a traves de una interfaz intuitiva que incluye en su diseño el branding de la cafetería.
## Definición del usuario
Mesero o personal de la cafetería Ne-Koffe que requiere aplicación en tablet para registrar los pedidos con la mayor facilidad en el menor tiempo posible.


## Historias de Usuario
#### Historia de usuario 1
El usuario puede ingresar a la interfaz con su token.

**DoD**
- Página de inicio
- Input para ingresar el token
- Botón de ingreso
- Alerta en caso de token incorrecto

#### Historia de usuario 2
El usuario al ingresar a la interfaz puede agregar productos a su comanda.

**DoD**
- Página para agregar productos
- Botones de productos que al dar click agrega 1 a la comanda
- Se visualiza la lista de productos agregados a la comanda
- Botón para enviar comanda a cocina

#### Historia de usuario 3
El usuario puede eliminar productos de su comanda o cancelarla antes de ser enviada.

**DoD**
- El usuario puede seleccionar productos de la lista comandada.
- Botón para eliminar el elemento seleccionado de la comanda
- Botón para cancelar comanda completa y volver a página anterior

#### Historia de usuario 4
La comanda al ser enviada aparece en la interfaz de cocina

**DoD**
- Interfaz para seleccionar funciones de cocina o mesero
- Interfaz de cocina
- Se imprime en la interfaz las comandas hechas con su respectivo status
- Botón en cada comanda que cambia el estado a DONE

#### Historia de usuario 5
El usuario puede editar una comanda ya enviada.

**DoD**
- Botón de "Agregar producto", que lleve a interfaz para agregar productos.
- Que se guarde el nuevo elemento en la misma comanda.

#### Historia de usuario 6
El usuario puede eliminar el producto de una comanda ya enviada en caso de cancelación.

**DoD**
- Se puede seleccionar el producto a eliminar
- Botón que permita eliminar el/los productos seleccionados.
- Alerta que solicite confirmación por parte del usuario antes de eliminar el/los productos
#### Historia de usuario 6
El usuario puede seleccionar desde que mesa comandar 
**DoD**
- Página donde se podrá seleccionar la mesa 
- Botón para volver a pagina inicial
- Botón dentro de esa página que lleve a la página donde se crea el pedido.

#### Historia de usuario 7
El usuario necesita poder elegir
 entre distintas opciones al seleccionar una mesa: ver comanda actual, agregar elementos al pedido e imprimir el ticket
**DoD**
- Componente donde se podrán visualizar las distintas opciones
- Botón para ver comanda actual
- Botón para agregar elementos al pedido
- Botón para imprimir el ticket
- Página que muestra la comanda actual 
#### Historia de usuario 8
El usuario puede agregar comentarios a un producto en especifico al tomar el pedido
**DoD**
- Botón para agregar comentario
- Input dentro de la página de tomar pedidos que nos permita comentar los productos al momento de agregarlos a la comanda
- Botón "Para llevar"
- Botón "No trabaja"

## Prototipo y Diagrama de Flujo
### Prototipo de baja fidelidad
![PrototipoBajaFidelidad](https://i.ibb.co/k4JD2Gt/Whats-App-Image-2019-09-24-at-8-52-17-PM.jpg)
## Documentación
### Prototipo para 1era iteración
![PrototipoPrimerSprint](https://i.ibb.co/1b2yW3g/Anotaci-n-2019-09-24-210709.png) 

## Extras

---
## English

## Index

- [Introduction](#introduction)
- [Product definition](#product-definition)
- [User definition](#user-definition)
- [User stories](#user-stories)
- [Prototype and Flowchart](#prototype-and-flowchart)
- [Documentation](#documentation)
- [Additional features](#Additional-features)

## Introduction
## Product definition
## User definition
## User stories
#### User Storie 1
**DoD**
## Prototype and Flowchart
## Documentation
## Additional features

# Burger Queen

## 1. Preámbulo

[React](https://reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las caractrísticas _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del proyecto

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
  _backend_ del que nos darán detalles más adelante).

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por $ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
>el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## 3. Objetivos de aprendizaje

1. El objetivo principal de este proyecto es aprender a construir una _interfaz web_ usando
   el _framework_ elegido (En este caso vamos a preferir usar React). Este Framework resuelve el problema de: **cómo mantener la interfaz y el estado
   sincronizados**. Así que esta experiencia espera familiarizarte con el
   concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
   ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un
   _producto_ a un _pedido_, la interfaz debe actualizar la lista del pedido y
   el total).

2. La interfaz debe estar diseñada específicamente para correr en
   **tablets**.

## 4. Consideraciones generales

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

Necesitamos pensar bien en el aspecto UX de quienes van a tomar los pedidos,
 el tamaño y aspecto de los botones, la visibilidad del estado actual del
 pedido, etc.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben indicar el porcentaje de coverage, al final se debe poder explicar el porcentaje logrado y porqué.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## 5. Conexión con el Back-end

Tu equipo está conformado por 2 desarrolladoras Front-end y 2 desarrolladoras Back-end, cada pareja contará con su propio repositorio.

El equipo de Front-end va a consumir los _endpoints_ que el equipo de Back-end expondrá, tanto para crear, actualizar, obtener y eliminar data. Reúnanse en equipo y decidan cuales serán estos _endpoints_ y cómo los usarán.

Este proyecto no manejará Autenticación de usuarios pero la comunicación entre el Front-end y el Back-end será protegida a través de un _Token_ que en el equipo van a definir en forma. Este _Token_ validará que la información que llega al Back-end es la correspondiente a la de su Front-end. Esta estrategia hace que la aplicación sea más segura de usar.

El _Token_ al ser una variable que solo debe ser conocida por lxs usuarixs no puede escribirse en texto plano, tendremos que investigar sobre [Variables de Entorno](https://en.wikipedia.org/wiki/Environment_variable) para poder protegerlos.

Es muy importante mantener activa la comunicación entre las parejas Front-end y Back-end, esto ayudará a prevenir inconsistencias al momento de mostrar los 2 proyectos funcionando.

## 6. Pistas, tips y lecturas complementarias

### Primeros pasos

Al usar `create-react-app` en el directorio del proyecto recibirás un
error diciendo que hay archivos que podrían presentar un conflicto. Para evitar
este problema puedes crear una nueva app usando `create-react-app` y de ahí
_mezclarla_ con la carpeta del proyecto:

```sh
# si estabase en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

create-react-app burger-queen-tmp
cp -r burger-queen/* burger-queen-tmp/
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* burger-queen/
rm -rf burger-queen-tmp
cd burger-queen
```

### Otros recursos

#### Frameworks / libraries

* [React](https://reactjs.org/)

#### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)
