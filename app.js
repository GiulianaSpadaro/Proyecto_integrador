const express = require("express");
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

app.use ('/', mainRoutes);
app.use ('/shop', shopRoutes);
app.use ('/admin', adminRoutes);
app.use ('/auth', authRoutes);




app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: http://localhost:${port}`);
});
