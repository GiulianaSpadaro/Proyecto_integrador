const authControllers = {
    loginView: (req, res) => res.send("Ruta para Iniciar sesión "),
    loginUser: (req, res) => res.send("Ruta de inicio de sesión que recibe los datos cuando el usuario hace clic en el botón de inicio de sesión"),
    registerView: (req, res) => res.send("Ruta para Registrarse"),
    registerUser: (req, res) => res.send("Ruta para enviar los datos de registro"),
    logout: (req, res) => res.send("Ruta que recibe los datos cuando el usuario hace clic en el botón de registro")
};




module.exports = authControllers;

