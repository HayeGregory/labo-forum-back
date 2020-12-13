const express = require('express');
const MessageController = require('./message.controller');
const router =  express.Router();

router.get('/', MessageController.getAllAction);
router.post('/', MessageController.createAction);
router.post('/create', MessageController.createAction);

module.exports = router;