const express = require ('express');
const FollowerController = require('./follower.controller');

const router = express.Router();

// route
router.get('/:id/discussions', FollowerController.getDiscussionsByFollowerId);
router.patch('/:idUser([0-9]+)/discussion/:id([0-9]+)/', FollowerController.createFollowerAction);

module.exports = router;