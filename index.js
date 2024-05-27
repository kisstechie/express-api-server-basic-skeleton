const express = require('express');
const app = express();
const productRoutes = require('./src/products/routes');

const {APP_NAME, PORT} = process.env; // Node built-in env files

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(` ${APP_NAME} - listening on port ${PORT}`);
});
