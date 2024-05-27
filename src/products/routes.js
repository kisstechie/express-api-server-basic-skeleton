const router = require('express').Router();
const ProductsController = require('./controllers/ProductsController');
router.get('/', [], ProductsController.getProducts);

module.exports = router;
