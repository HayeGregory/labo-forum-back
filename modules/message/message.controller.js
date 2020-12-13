const db = require('../../models');

class MessageController {
        // private #
        #errorResponse = function( err, res ) { 
            res.status(500).json( {error: err.message} ); 
        };

        // Methods
        // GET
        getAllAction( req, res ) {
            db.Messages
                .findAll()
                .then(data => res.json(data))
                .catch(err => this.#errorResponse(err , res));
        }
        // CREATE
        createAction( {body}, res ) {
            db.Messages
                .create( {...body} )
                .then(message => res.status(203).json(message))
                .catch(err => this.#errorResponse(err, res));
        }
}

module.exports = new MessageController();