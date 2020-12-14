const db = require('../../models');

class DiscussionController {

    #errorResponse = function(err, res) { 
        res.status(500).json({error: err.message}); 
    };

    // methods
    // GET
    getAllAction(req, res) {
        db.Discussions
            .findAll({include: ["Messages", "User"]}) /// inclure les messages, l'user
            .then(data => res.json(data.map(d => ({discussion_id: d.id, messages: d.Messages, user: {username: d.User.username}})))) // creation d'un dto (data transfert object)
            .catch(err => console.log(err));
    }

    // CREATE
    createAction( {body}, res ) {
        db.Discussions
            .create( {...body} )
            .then(discussion => res.status(203).json(discussion))
            .catch(err => this.#errorResponse(err, res));

    }

    // // Add user to moderate
    // async addUserToModerate ( {params: {id, idUser}}, res) {
    //     const discussion = await db.Discussions.findByPk(id);
    //     const user = await db.Users.findByPk(idUser);

    //     discussion.addUser(user.id)
    //         .then(discussion => res.json(discussion))
    //         .catch(console.log("Errreur lors de l'ajout du moderateur"));
        
    // }
    
}

module.exports = new DiscussionController();