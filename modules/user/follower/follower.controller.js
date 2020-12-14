const db = require('../../../models');

class FollowerController {

    // get discussions by follower ID
    
    async getDiscussionsByFollowerId({params: {id}}, res) {
        res.json(await (await db.Discussions
                .findAll({include: ["follower"]}))
                .filter(d => d.follower.find(item => item.id == id) != null));
}

    // add user to follow discussion
    async createFollowerAction ({ params: {id, idUser} }, res) {

        const discussion = await db.Discussions.findByPk(id);
        const follower = await db.Users.findByPk(idUser);

        discussion.addFollower(follower);
        discussion.save(); 

        res.json(`user : ${follower.id} suit la discussion ${discussion.id}`);
    }

}

module.exports = new FollowerController();