var express = require('express');
var router = express.Router();
const controller = require('../controller/posts');

/* GET users listing. */
router
    .get('/', controller.getAll)
    // .get('/create', controller.getCreate)
    .get('/:id', controller.getOne)     
    .post('/', controller.create)
    .post('/:id', controller.getUpdate)
    .delete('/:id', controller.getDelete)


module.exports = router;
