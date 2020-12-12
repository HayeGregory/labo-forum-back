const db = require('../../models');

class UserController {

    // private #
    #errorResponse = function(err, res) { 
        res.status(500).json({error: err.message}); 
    };
    
    // GET 
    getAllAction(req, res) {
        // terminal :
        // Executing (default): SELECT `id`, `username`, `password`, `createdAt`, `updatedAt` FROM `Users` AS `Users`;
        db.Users
            .findAll()
            .then(data => res.json(data))
            .catch(err => this.#errorResponse(err, res));

    }
    
    getOneByIdAction({params: {id}}, res) {
        // terminal :
        // Executing (default): SELECT `id`, `username`, `password`, `createdAt`, `updatedAt` FROM `Users` AS `Users` WHERE `Users`.`id` = '1';
        db.Users
            .findByPk(id)
            .then(data => res.json(data))
            .catch(err => this.#errorResponse(err, res));

    }
    
    // CREATE
    createAction( {body}, res ) {
        // terminal :
        // Executing (default): INSERT INTO `Users` (`id`,`username`,`password`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4);
        db.Users
            .create({...body})
            .then(user => res.status(203).json(user))
            .catch(err => this.#errorResponse(err, res));
    }

    // PUT : UPDATE : element asynchrone
    async updateAction({params: {id}, body}, res) {
        // terminal (d'office un partial) : 
        // Executing (default): SELECT `id`, `username`, `password`, `createdAt`, `updatedAt` FROM `Users` AS `Users` WHERE `Users`.`id` = '1';
        // Executing (default): UPDATE `Users` SET `password`=$1,`updatedAt`=$2 WHERE `id` = $3
        const user = await db.Users.findByPk(id);
        user.update({...body})
            .then(updatedUser => res.json(updatedUser))
            .catch(err => this.#errorResponse(err, res));
    }
    // PATCH : partial update
    async partielUpdateAction({params: {id}, body}, res) {
        // terminal : 
        // Executing (default): SELECT `id`, `username`, `password`, `createdAt`, `updatedAt` FROM `Users` AS `Users` WHERE `Users`.`id` = '1';
        // Executing (default): UPDATE `Users` SET `username`=$1,`updatedAt`=$2 WHERE `id` = $3
        const user = await db.Users.findByPk(id);
        user.update({...body})
            .then(updatedUser => res.json(updatedUser))
            .catch(err => this.#errorResponse(err, res));
    }
}

module.exports = new UserController(); 