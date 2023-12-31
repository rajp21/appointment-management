import Joi from "joi";
import Service from "../../models/services/services";
import CustomErrorHanlder from "../../services/CustomErrorHandler";


const serviceController = { 
    async addService(req, res, next){ 
        // validation
        const serviceSchema = Joi.object({ 
            service: Joi.string().required().messages({ 
                "string.empty": "Services is required", 
            }), 

            questionary: Joi.array().items(Joi.string()).messages({
                "joi.array": "questionary must be type of array", 
                "joi.items": "array value must be string"
            })
        }); 

        const {error}  = serviceSchema.validate(req.body); 

        if(error){ 

            return next(error); 
        }

         
        let { service, questionary} = req.body; 

        // check weather service already exist or not? 

        let exists; 

        service = service.trim();  
        service = service.toLowerCase(); 
        

        try{ 
            exists = await Service.exists({service: service}); 
        }catch(e){ 
            return next(e); 
        }

        if(exists){ 
            return next(CustomErrorHanlder.serviceAlreadyExists(422, "Service Already Exists"));             
        }

        let serviceResult = new Service({ 
            service: service, 
            ...(questionary && {questionary: questionary}) 
        }) 

        let result; 

        try{ 
            result = await serviceResult.save(); 
        }catch(e){  
            return next(e); 
        }
        
        return res.status(200).json(result); 
    }, 

    async addQuestionToServiceQuestionary(req, res, next){ 
        // vlaidation 
        let questionSchema = Joi.object({ 
            _id: Joi.string().required().messages({
                "string.empty": "Id is required", 
            }), 

            question: Joi.string().required({ 
                "string.empty": "Question is required", 
            })
        })

        let {error} = questionSchema.validate(req.body); 

        if(error){ 
            return next(error); 
        }

        let serviceData; 
        let { _id, question} = req.body; 

        try{    
            serviceData = await Service.findOneAndUpdate({_id: _id}, {$push: {questionary: question}}, {new: true});
        }catch(e){ 
            return next(e); 
        }


        return res.status(200).json({ 
            success: true, 
            data: serviceData
        }); 
    }
}


export default serviceController; 