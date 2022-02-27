var express = require('express');
var router = express.Router();
const controller = require('../controller/users');

/* GET users listing. */
router
    .get('/', controller.getAll)
    // .get('/create', controller.getCreate)
    // .get('/:id', controller.getEdit)     
    .post('/', controller.create)
    // .post('/:id', controller.update)

module.exports = router;
