# Burger Queen

## Idioma/Language
- [Español](#español)
- [English](#english)

---

## Español

## Índice

- [Introducción](#introduccion)
- [Definición del producto y usabilidad](#definición-del-producto-y-usabilidad)
- [Definición del usuario](#definición-del-usuario)
- [Historias de Usuario](#historias-de-usuario)
- [Prototipo y Diagrama de flujo](#prototipo-y-diagrama-de-flujo)
- [Documentación](#documentación)


## Introducción
Este proyecto fue realizado durante el Bootcamp de Laboratoria, sede Guadalajara Generación 003, durante el reto de Burger Queen. 
La duración de este fue de 3 semanas divididas en sprints(uno por semana).
El equipo Nekoders esta conformado por 4 estudiantes, mismas que se dividieron en actividades de Front-End y Back-End.
### Front-End:
- Karla Elizabeth Alvarez Castilla
- Gloria Ramírez Robles
### Back-End:
- Karina Lizbeth Cabrera Ruiz
- Brenda Lucero Vielmas García

Dentro de este repositorio se documenta la parte Front-End del proyecto.

Para organización de las tareas que realizaríamos se realizó por medio de un tablero Kanban y un Trello

https://trello.com/b/VOwYnkia/ne-koders-front-end

![Tablero Kanban](https://i.ibb.co/Q8bvx6C/kanban-burger-queen.jpg)

## Definición del producto y usabilidad
Nuestro cliente es la cafetería Ne-koffee, un concepto en la ZMG donde puedes convivir con gatos durante tu estancia en ella. Como parte de su planeación de micro empresa, los dueños de Ne-koffee han solicitado la creación de una aplicación para tablets que pueda ser utilizada por sus meseros para tomar pedidos y emitir la comanda correspondiente al área de cocina. Esta aplicación debe cumplir con estos requisitos:
- Poder ser utilizada exclusivamente por el personal de la cafetería (por medio de un token)
- Permitir agregar productos del menú a la comanda
- Permitir eliminar productos de la comanda
- Interfaz para la Barra de Café
- Editar una comanda ya existente
- Eliminar la comanda completa en caso de cancelación
- Enviar la comanda finalizada a Barra de Café
- Separar las comandas por mesa atendida

Todo lo anterior debe ser a traves de una interfaz intuitiva que incluye en su diseño el branding de la cafetería.
## Definición del usuario
Meseros y baristas de la cafetería Ne-Koffee que requieren una  aplicación en tablet para registrar y organizar los pedidos con mayor facilidad en el menor tiempo posible.

## Historias de Usuario
#### Historia de usuario 1
El usuario puede ingresar a la interfaz con contraseña y obtener un token.

**DoD**
- Página de inicio
- Input para ingresar contraseña
- Botón de ingreso
- Alerta en caso de contraseña incorrecta

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
La comanda al ser enviada aparece en la interfaz de Barra de Café.

**DoD**
- Interfaz para seleccionar funciones de Barra de Café o Mesero
- Interfaz de Barra de Café
- Se imprime en la interfaz las comandas hechas con su respectivo status
- Botón en cada comanda que cambia el estado a DONE

#### Historia de usuario 5
El usuario necesita poder elegir entre distintas opciones al seleccionar una mesa: ver comanda actual, agregar elementos al pedido e imprimir el ticket.

**DoD**
- Componente donde se podrán visualizar las distintas opciones
- Botón para ver comanda actual
- Botón para agregar elementos al pedido
- Botón para imprimir el ticket
- Página que muestra la comanda actual 

#### Historia de usuario 6
El usuario puede editar una comanda ya enviada.

**DoD**
- Botón de "Agregar producto", que lleve a interfaz para agregar productos.
- Que se guarde el nuevo elemento en la misma comanda.

#### Historia de usuario 7
El usuario puede eliminar el producto de una comanda ya enviada en caso de cancelación.

**DoD**
- Se puede seleccionar el producto a eliminar
- Botón que permita eliminar el/los productos seleccionados.
- Alerta que solicite confirmación por parte del usuario antes de eliminar el/los productos

#### Historia de usuario 8
El usuario puede seleccionar desde que mesa comandar.

**DoD**
- Página donde se podrá seleccionar la mesa 
- Botón para volver a pagina inicial
- Botón dentro de esa página que lleve a la página donde se crea el pedido.

#### Historia de usuario 9
El usuario puede agregar comentarios a un producto en especifico al tomar el pedido.

**DoD**
- Botón para agregar comentario
- Input dentro de la página de tomar pedidos que nos permita comentar los productos al momento de agregarlos a la comanda
- Botón "Para llevar"
- Botón "No trabaja"

## Prototipo y Diagrama de Flujo
### Prototipo de baja fidelidad
![PrototipoBajaFidelidad](https://i.ibb.co/k4JD2Gt/Whats-App-Image-2019-09-24-at-8-52-17-PM.jpg)
## Documentación
#### Sprint 1
Se realizó la planeación del proyecto dado que al tener solo 3 semanas era importante priorizar ciertas tareas para lograr el objetivo principal, y en caso de tener tiempo de sobra realizar algunas especificaciones extras. Se hicieron prototipos de baja fidelidad: uno de como nos gustaría fuera la aplicación al completar las Historias de Usuario planeadas, y otro solo para las primeras 3 historias.
Escogimos la paleta de colores y se creó el logotipo de la cafetería para basar el diseño de la aplicación en ellos.
Se definieron las tareas principales de la Historia de Usuario 1, 2 y 3 para enfocar los esfuerzos de la semana en ellas.
Hubo algunas dudas en el manejo de los componentes padres e hijos, pero estas se resolvieron en esa misma semana. 
Se agregó React-Router y todas las rutas creadas se hicieron privadas para poder acceder a ellas solo al obtener un token.
### Prototipo para 1era iteración
![PrototipoPrimerSprint](https://i.ibb.co/1b2yW3g/Anotaci-n-2019-09-24-210709.png) 
#### Sprint 2
En esa semana obtuvimos feedback de los coaches e incluimos en la planeación una Historia de Usuario que mostrara la interfaz de Barra de Café con las comandas realizadas.
La parte Back-end del proyecto estaba casi completa, pero faltaba definir el método con el que enviaríamos las comandas a Back-end y como obtenerla de regreso para mostrarlas en la interfaz de Barra de Café y poder manipularlas.
En esta parte nos estancamos un poco ya que el CORS nos ocasionaba bastantes conflictos y no podíamos enlazarnos correctamente.
#### Sprint 3
Durante este último sprint nos dividimos en 2 equipos con un miembro de Back y otro de Front cada uno. Nuestros principales problemas eran enlazar las comandas realizadas con back-end ya que al traerlas de regreso eran un array vacío, y poder guardar el token de usuario para poder autentificar y usar las rutas con seguridad planteadas al inicio.
Ambos problemas lograron resolverse de manera correcta y por cuestiones de tiempo nos dedicamos en perfeccionar la aplicación en diseño y experiencia del usuario para la presentación final.
Planeamos seguir trabajando en el proyecto en futuras semanas para terminar las Historias de Usuario restantes.

---
## English

## Index

- [Introduction](#introduction)
- [Product definition and usability](#product-definition-and-usability)
- [User definition](#user-definition)
- [User stories](#user-stories)
- [Prototype and Flowchart](#prototype-and-flowchart)
- [Documentation](#documentation)
- [Additional features](#Additional-features)

## Introduction
This project was made during Laboratoria Bootcamp, Generation 003 in Guadalajara, during the Burger Queen challenge.
The duration of this project was 3 weeks divided into sprints (one per week).
The team Nekoders is made up of 4 students, who were divided into Front-End and Back-End activities.
### Front-End:
- Karla Elizabeth Alvarez Castilla
- Gloria Ramírez Robles
### Back-End:
- Karina Lizbeth Cabrera Ruiz
- Brenda Lucero Vielmas García

Within this repository the Front-End part of the project is documented.

For the organization of the tasks we would perform, we made create a Kanban board and a Trello.

https://trello.com/b/VOwYnkia/ne-koders-front-end

![Kanban](https://i.ibb.co/Q8bvx6C/kanban-burger-queen.jpg)

## Product definition and usability
Our client is the Ne-koffee coffee shop, a concept in the ZMG where you can interact with cats while you stay there. As part of their micro-enterprise planning, the owners of Ne-koffee have requested the creation of an application for tablets that can be used by their waiters to take orders and send the command corresponding to the Coffee Bar area. This application must have these requirements:
- Can be used exclusively by the cafeteria staff (Using a Token)
- Allow to add menu products to the command
- Allow to eliminate products of the command
- Coffee Bar Interface
- Edit an existing command
- Remove the complete command in case of cancellation
- Send the finished command to the Coffee Bar
- Separate the commands by attended table

All of the above must be through an intuitive interface that includes the branding of the cafeteria in its design.
## User definition
Waiters and baristas from the Ne-Koffee coffee shop that require a tablet application to register and organize orders more easily in the shortest possible time.

## User Stories
#### User Story 1
The user can enter to the interface with a password and get a Token.

**DoD**
- Homepage
- Input to write password
- Enter button
- Alert in case of incorrect password

#### User Story 2
The user, when access to the interface, can add products to his command.

**DoD**
- Page to add products
- Product buttons that when are clicked add 1 to the command
- The list of products added to the command is displayed
- Button to send command to kitchen

#### User Story 3
The user can remove products from his command or cancel it before being sent.

**DoD**
- The user can select products from the commanded list.
- Button to remove the selected item from the command
- Button to cancel full command and return to previous page

#### User Story 4
The command to be sent appears in the Coffee Bar interface

**DoD**
- Interface to select Coffee Bar or Waiter functions
- Coffee Bar interface
- The commands made with their respective status are printed on the interface
- Button on each command that changes the status to DONE

#### User Story 5
The user needs to be able to choose between different options when selecting a table: see current command, delete the order and print the ticket

**DoD**
- Interface where the different options can be displayed
- Button to see currents commands
- Button to delete command
- Button to print the ticket
- Page showing the current command

#### User Story 6
The user can edit a command already sent.

**DoD**
- "Add product" button, which leads to interface to add products.
- The new element is stored in the same command.

#### User Story 7
The user can remove the product of a command already sent in case of cancellation.

**DoD**
- You can select the product to remove
- Button to delete the selected products.
- Alert requesting confirmation from the user before removing the product

#### User Story 8
The user can select from which table to command

**DoD**
- Page where you can select the table
- Button to return to home page
- Button within that page that leads to the page where the order is created.

#### User Story 9
The user can add comments to a specific product when taking the order

**DoD**
- Add comment button
- Input within the take orders page that allows us to comment on the products when adding them to the command
- "Take away" button
- "Doesn't work" button

## Prototype and Flowchart
![Prototype-low-fidelity](https://i.ibb.co/k4JD2Gt/Whats-App-Image-2019-09-24-at-8-52-17-PM.jpg)

## Documentation
#### Sprint 1
Project planning was the first thing we did because we only had 3 weeks and it was important to prioritize certain tasks to achieve the main objective, and in case we had time finish some extra specifications. Low fidelity prototypes were made: one of how we would like the application to be when completing all the planned User Stories, and another only for the first 3 stories.
We chose the color palette and the Coffee Shop logo was created to base the design of the application on them.
The main tasks of User History 1, 2 and 3 were defined to focus the week's efforts on them.
There were some doubts in the handling of the parents and children components, but these were resolved in the same week.
React-Router was added and all routes created were made private so that they could be accessed only by obtaining a token.
### Prototype for 1st iteration
! [Prototype-Sprint-1] (https://i.ibb.co/1b2yW3g/Anotaci-n-2019-09-24-210709.png) 
#### Sprint 2
In that week we obtained feedback from the coaches and included in the planning a User Story that showed the coffee bar interface with the commands made.
The Back-end part of the project was almost complete, but it was necessary to define the method with which we would send the commands to Back-end and how to obtain it back to display them in the coffee bar interface and be able to manipulate them.
In this part we were blocked because the CORS caused us many conflicts and we could not link properly.
#### Sprint 3
During this last sprint we split into 2 teams with a Back member and a Front member each. Our main problems were to link the commands made with back-end since when they were brought back they were an empty array, and to be able to save the user token to be able to authenticate and use the routes safely raised at the beginning.
Both problems were solved correctly and for reasons of time we are dedicated to perfecting the application in design and user experience for the final presentation.
We plan to continue working on the project in future weeks to finish the remaining User Stories.