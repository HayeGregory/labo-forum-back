const db = require('../../models');

class UserController {

    // private #
    #errorResponse = function(err, res) { 
        res.status(500).json({error: err.message}); 
    };
    // forum API : 
    // GET 
    getAllAction(req, res) {
        // terminal :
        // Executing (default): SELECT `id`, `username`, `password`, `createdAt`, `updatedAt` FROM `Users` AS `Users`;

        // pour inclure les roles dans la reponse : {include: ["Roles"]}
        // demander pour recup quelquechose de plus court ( id et/ou label)
        db.Users
        .findAll()
        .then(data => res.json(data))
        .catch(err => this.#errorResponse(err, res));
        
    }

    getOneByIdAction({params: {id}}, res) {
        // terminal :
        // Executing (default): SELECT `id`, `username`, `password`, `createdAt`, `updatedAt` FROM `Users` AS `Users` WHERE `Users`.`id` = '1';
        db.Users
        .findByPk(id, {include: ["Roles"]})
        .then(user => res.json(user))                    // user.Roles.map(r => ({ id: r.id , label: r.label})))
        .catch(err => this.#errorResponse(err, res));
        
    }

    // CREATE
    createAction( {body}, res ) {
        // terminal :
        // Executing (default): INSERT INTO `Users` (`id`,`username`,`password`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4);
        db.Users
            .create({...body})
            .then(user => res.status(203).json(user))
            .catch(console.log(body))
            //.catch(err => this.#errorResponse(err, res));
    }
    
    
    // ---------------------------------------------------------------------------------

    getRolesByUserID({params: {id}}, res) {
        // terminal :
        // Executing (default): SELECT `Users`.`id`, `Users`.`username`, `Users`.`password`, `Users`.`createdAt`, `Users`.`updatedAt`, `Roles`.`id` AS `Roles.id`, `Roles`.`label` AS `Roles.label`, `Roles`.`createdAt` AS `Roles.createdAt`, `Roles`.`updatedAt` AS `Roles.updatedAt`, `Roles->User_Roles`.`UserId` AS `Roles.User_Roles.UserId`, `Roles->User_Roles`.`RoleId` AS `Roles.User_Roles.RoleId` FROM `Users` AS `Users` LEFT OUTER JOIN `User_Roles` AS `Roles->User_Roles` ON `Users`.`id` = `Roles->User_Roles`.`UserId` LEFT OUTER JOIN `Roles` AS `Roles` ON `Roles`.`id` = `Roles->User_Roles`.`RoleId` WHERE `Users`.`id` = '1';
        db.Users.findByPk(id, {include: ["Roles"]})
            .then(user => res.json(user.Roles.map( r => ( { id: r.id, label: r.label } ))))
            // .then(user => res.json(user.Roles)) 

            // .then(async user => { res.json(await user.getRoles()) }) 
            // --> equivalent en pl. requete (il faut retirer  l'include dans le findbypk), getRoles ( jointure )
            // lazy loading : early loading ? 
            
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

    async addRoleToUserAction({params: {id}, body}, res) {
        const user = await db.Users.findByPk(id);
        const role = await db.Roles.create({...body}); // Oo'''' pk creer un role?????
        /* Flavian   */
        user.addRole(role.id)
            .then(user => res.json(user));
    }
}

module.exports = new UserController(); 