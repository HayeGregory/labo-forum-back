const express = require('express');
const UserController = require('./user.controller');

const router = express.Router();

// mes routes de mon controller equivalant [httpGet], annotation en c#
router.get('/', UserController.getAllAction);
router.get('/:id([0-9]+)', UserController.getOneByIdAction);
// pl. route vers mon create Action
router.post('/', UserController.createAction);
router.post('/create', UserController.createAction);

module.exports = router;