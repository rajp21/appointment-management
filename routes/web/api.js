import express from 'express'; 
import { userController } from '../../controllers/web';

const router = express.Router(); 

router.post('/save-user', userController.saveUser); 
router.post('/save-user-address', userController.saveUserAddress); 

export default router; 