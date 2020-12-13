const express = require('express');
const DiscussionController = require('./discussion.controller');
const router = express.Router();

router.get('/', DiscussionController.getAllAction);
router.post('/', DiscussionController.createAction);
router.post('/create', DiscussionController.createAction);

module.exports = router;