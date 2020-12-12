const express = require('express');
const db = require('../../utils/db.util');

class UserController {

    // private #
    #errorResponse = function(err, res) { 
        res.status(500).json({error: err.message}); 
    };
    
    // GET
    getAllAction(req, res) {
        db.readDB(db.DB_PATH)
            .then(data => res.json(data))
            .catch(err => this.#errorResponse(err, res));
    }
    
    getOneByIdAction({params: {id}}, res) {
        db.readDB(db.DB_PATH)
            .then(data => res.json(data.users.find(u => u.id == id)))
            .catch(err => this.#errorResponse(err, res));
    }

}

module.exports = new UserController(); 