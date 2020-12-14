const db = require('../../models');

class DiscussionController {

    #errorResponse = function(err, res) { 
        res.status(500).json({error: err.message}); 
    };

    // methods
    // GET
    getAllAction(req, res) {
        db.Discussions
            .findAll({include: ["Messages"]}) /// ??????? ERROR , faut ti rajouter une assoc dans discussion pour le 1-many
            .then(data => res.json(data.map(d => ({discussion_id: d.id, messages: d.Messages}))))
            .catch(err => this.#errorResponse(err, res));
    }

    // CREATE
    createAction( {body}, res ) {
        db.Discussions
            .create( {...body} )
            .then(discussion => res.status(203).json(discussion))
            .catch(err => this.#errorResponse(err, res));

    }
    
}

module.exports = new DiscussionController();