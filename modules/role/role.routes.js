const express = require('express');
const RoleController = require('./role.controller');
const router = express.Router();

router.get('/', RoleController.getAllAction);
router.get('/:id([0-9]+)', RoleController.getOneByIdAction);
router.post('/', RoleController.creationAction);

module.exports = router;