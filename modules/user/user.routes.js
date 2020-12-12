const express = require('express');
const UserController = require('./user.controller');

const router = express.Router();

// mes routes de mon controller
router.get('/', UserController.getAllAction);
router.get('/:id([0-9]+)', UserController.getOneByIdAction);

module.exports = router;