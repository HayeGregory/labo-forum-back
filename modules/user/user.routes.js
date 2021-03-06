const express = require('express');
const UserController = require('./user.controller');
const ModeratorController = require('./moderator/moderator.controller');

const router = express.Router();

// mes routes de mon controller equivalant [httpGet], annotation en c#
router.get('/', UserController.getAllAction);
router.get('/:id([0-9]+)', UserController.getOneByIdAction);
router.get('/:id([0-9]+)/roles', UserController.getRolesByUserID);
// pl. route vers mon create Action
// rappel :
// post creation d'un users
// put update pour formulaire de users
// patch update d'un role par exemple
router.post('/', UserController.createAction);
router.post('/create', UserController.createAction);
router.put('/:id([0-9]+)', UserController.updateAction); // update
router.patch('/:id([0-9]+)', UserController.partielUpdateAction); // partial update
router.patch('/:id([0-9]+)/role', UserController.addRoleToUserAction); // patch d'un role

module.exports = router;