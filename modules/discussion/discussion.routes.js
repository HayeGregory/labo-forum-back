const express = require('express');
const DiscussionController = require('./discussion.controller');
const router = express.Router();

router.get('/', DiscussionController.getAllAction);
router.post('/', DiscussionController.createAction);
router.post('/create', DiscussionController.createAction);

// router.patch('/:id([0-9]+)/moderateByUser/:idUser([0-9]+)', DiscussionController.addUserToModerate);

module.exports = router;