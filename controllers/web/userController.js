import { User } from "../../models";

const userController = { 
    async saveUser(req, res, next){ 
        res.render('index'); 
    }
}

export default userController; 