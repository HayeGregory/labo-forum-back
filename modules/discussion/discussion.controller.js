const db = require('../../models');

class DiscussionController {

    #errorResponse = function(err, res) { 
        res.status(500).json({error: err.message}); 
    };

    // methods
    // GET
    getAllAction(req, res) {
        db.Discussions
            .findAll()
            .then(data => res.json(data))
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