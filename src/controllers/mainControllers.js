const mainControllers = {
    home:(req, res) => res.send("Ruta para la vista del Home"),
    contact:(req, res) => res.send("Ruta para la vista de contactos"),
    about: (req, res) => res.send("Ruta para la vista about"),
    faqs:(req, res) => res.send("Ruta para ver las preguntas Frecuentes"),

}

module.exports = mainControllers;