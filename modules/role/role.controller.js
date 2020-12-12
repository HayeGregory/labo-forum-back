const db = require("../../models");

class RoleController {

    // private #
    #errorResponse = function(err, res) { 
        res.status(500).json({error: err.message}); 
    };

    getAllAction (req, res) {
        db.Roles
            .findAll()
            .then(data => res.json(data))
            .catch(err => this.#errorResponse(err, res));
    }

    getOneByIdAction({params: {id}}, res) {
        db.Roles
            .findByPk(id)
            .then(data => res.json(data))
            .catch(err => this.#errorResponse(err, res));
    }

    creationAction({body}, res) {
        db.Roles.create({...body})
            .then(role => res.status(203).json(role))
            .catch(err => this.#errorResponse(err, res));
    }

}

module.exports = new RoleController(); 