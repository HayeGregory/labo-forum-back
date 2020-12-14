const express = require('express');
const ModeratorController = require('./moderator.controller');

const router = express.Router();


// moderateur
router.get('/:id/discussions', ModeratorController.getDiscussionsByModeratorId);
router.patch('/:idUser([0-9]+)/discussion/:id([0-9]+)/', ModeratorController.createModeratorAction);


module.exports = router;