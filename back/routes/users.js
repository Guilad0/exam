var express = require('express');
var router = express.Router();

const{
  getUsuarios,
  postUsers
} = require('../controllers/users')

router.get('/', getUsuarios);
router.post('/', postUsers);

module.exports = router;
