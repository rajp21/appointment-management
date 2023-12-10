import express from 'express'; 
import userController from '../../controllers/web/userController';
const router = express.Router(); 



router.get('/', userController.saveUser); 



export default router; 