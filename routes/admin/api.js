import express from 'express'; 
import serviceController from '../../controllers/admin/servicecontroller';


const router = express.Router(); 

router.post('/add-service', serviceController.addService); 
router.post('/add-question-to-service', serviceController.addQuestionToServiceQuestionary); 

export default router;