const db = require ("../../../models");

// controller particulier de user, le moderateur
// - a definir la route pour ce controller
class ModeratorController {

        // get discussions by moderator id
        async getDiscussionsByModeratorId({params: {id}}, res) {
                res.json(await (await db.Discussions
                        .findAll({include: ["moderator"]}))
                        .filter(d => d.moderator.find(item => item.id == id) != null));
        }

        // Add user to moderate
        async createModeratorAction ( {params: {id, idUser}}, res) {
            const discussion = await db.Discussions.findByPk(id);
            const moderator = await db.Users.findByPk(idUser);
            discussion.addModerator(moderator);
            discussion.save();
            res.json("test");
            
        }
}

module.exports = new ModeratorController();