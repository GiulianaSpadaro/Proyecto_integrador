

const shopControllers = {
  shop: (req, res) => res.send( 'Ruta para la vista de shop'),
  item: (req, res) => res.send('Ruta para ver la vista de productos individuales'),
  addItemToCart: (req, res) => res.send('Ruta para agregar un producto al carrito'),
  cartView: (req, res) => res.send('Ruta para ver el carrito'),
  checkout: (req, res) => res.send('Ruta para recibir los productos seleccionados e iniciar el proceso de compra.'),
}

module.exports = shopControllers;