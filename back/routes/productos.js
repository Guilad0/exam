var express = require('express');
var router = express.Router();

const{
  getProductos,
  postProductos,
  putProductos
} = require('../controllers/productos')

router.get('/', getProductos);
router.post('/', postProductos);
router.put('/:id', putProductos);

module.exports = router;
