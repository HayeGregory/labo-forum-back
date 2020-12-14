const UserController = require ('./user.controller');
const ModeratorController = require('./moderator/moderator.controller');
const UserRouter = require('./user.routes');
const ModeratorRouter = require('./moderator/moderator.routes');

module.exports = { UserController, ModeratorController, UserRouter, ModeratorRouter };