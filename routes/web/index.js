import express from 'express'; 
import { uiController, userController } from '../../controllers/web';


const router = express.Router(); 


router.get('/', uiController.home); 
router.get('/about-us', uiController.about); 
router.get('/our-services', uiController.service); 
router.get('/contact-us', uiController.contact); 
router.get('/book-appointment', uiController.appointment); 





export default router; 