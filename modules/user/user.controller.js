const db = require('../../utils/db.util');

class UserController {

    // private #
    #errorResponse = function(err, res) { 
        res.status(500).json({error: err.message}); 
    };
    
    // GET en promesse synchrone
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

    // CREATE en async (pour faire autrement)
    async createAction( {body}, res ) {
        try {
            const data = await db.readDB(db.DB_PATH);
            const LastID = Math.max(...data.users.map(u => u.id));
            const user = body;

            user.id = LastID + 1 ;
            data.users.push(user);
            await db.writeDB(db.DB_PATH, data); // ???? pas d'await
            res.json(user);

        } catch (err) {

        }
    }

}

module.exports = new UserController(); 