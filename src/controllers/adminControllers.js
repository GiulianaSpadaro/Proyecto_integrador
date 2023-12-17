
const adminControllers = {
  adminView: (req, res) => res.send('Ruta para la vista de admin'),
  createView:  (req, res) => res.send('Ruta para crear elemento'),
  createItem:  (req, res) => res.send('Crear ruta que reciba datos de un nuevo elemento para agregar en la base de datos'),
  editView:  (req, res) => res.send('Ruta para la vista de edit'),
  editItem:  (req, res) => res.send('Ruta para editar elementos de la base de datos'),
  deleteItem:  (req, res) => res.send('Ruta para eliminar un elemento de la base de datos'),

  }

module.exports = adminControllers;


  