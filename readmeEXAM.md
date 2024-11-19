Prueba Técnica 2: Gestión de Inventario para una Tienda Online
Duración estimada: 4 horas
Objetivo: Evaluar habilidades en el desarrollo de un sistema de inventario con gestión de usuarios y productos.
__
Contexto del Proyecto
Desarrolla una aplicación para la gestión de inventarios de una tienda. La aplicación debe permitir:
Registro e inicio de sesión de usuarios.
Gestión de productos (crear, editar, eliminar, listar).
Visualización del inventario con información sobre stock y precio.
Registro de ventas que reduzcan automáticamente el stock del producto.
Reporte de ventas y productos agotados.
__
Requisitos Técnicos
Frontend
•    Framework: Vue.js o React.
•    Estilos: Bootstrap o Tailwind CSS.
•    Formularios interactivos y validaciones con SweetAlert2.
Backend
•    Framework: Node.js con Express.
•    APIs RESTful: CRUD para usuarios, productos y ventas.
•    Autenticación: JWT.
Base de Datos
•    SQL: PostgreSQL con Sequelize o NoSQL: MongoDB con Mongoose.
•    Tablas/colecciones:
o    Usuarios.
o    Productos (ID, nombre, precio, stock).
o    Ventas (ID, producto, cantidad, fecha).