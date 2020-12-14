const UserController = require ('./user.controller');
const ModeratorController = require('./moderator/moderator.controller');
const FollowerController = require('./follower/follower.controller');
const UserRouter = require('./user.routes');
const ModeratorRouter = require('./moderator/moderator.routes');
const FollowerRouter = require('./follower/follower.routes');

module.exports = { 
    UserController, UserRouter,
    ModeratorController, ModeratorRouter,
    FollowerController, FollowerRouter 
};