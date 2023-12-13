import { User } from "../../models";
import Joi from "joi";

const userController = { 
    async saveUser(req, res, next){ 
        const {fullName, phoneNo, emailId, age, gender, weight, address} = 
        req.body; 


        
        // validating 

        const userSchema = Joi.object({
            fullName: Joi.string().min(3).required().messages({ 
                "string.empty": "Full Name is required", 
                "string.min": "Full Name should atleast consist of 3 characters"
            }), 

            phoneNo: Joi.string().required().messages({ 
                "string.empty": "Phone no is required"
            }), 

            emailId: Joi.string().email().messages({ 
                "string.email": "Enter Valid Email address"
            }), 

            age: Joi.number().min(10).max(100).messages({ 
                "number.empty": "Age is required", 
                "number.min": "Age should be mininum 10", 
                "number.max": "Age should be less than 100"
            }), 

            gender: Joi.string().valid('male', 'female', 'other').required(), 
            weight: Joi.number().min(20).max(200).required(), 
        }); 

        
        let {error} = userSchema.validate(req.body); 

        if(error){ 
            return next(error); 
        }

        

        // check ther database for phone no check up 
        let data; 
        try{ 
            data = await User.findOne({phoneNo: phoneNo}); 
        }catch(e){ 
            return next(e); 
        }

        if(data){ 
            return res.status(200).json(data); 
        }



        let user = new User({
            fullName, 
            phoneNo, 
            emailId, 
            age, 
            weight, 
            gender
        })

        let result; 

        try{ 
            result = await user.save(); 
        }catch(e){ 
            return next(e); 
        }

        return res.status(200).json(result); 
    }, 

    async saveUserAddress(req, res, next){
        let addressSchema = Joi.object({
            flatNoOrhouseNo: Joi.string().required(), 
            buildingOrApartment: Joi.string().required(), 
            StreetOrAreaName: Joi.string().required(), 
            cityName: Joi.string().required(), 
            state: Joi.string().required(), 
            pincode: Joi.string().length(6).pattern(/^\d+$/).message('PIN code must be a 6-digit number'),  
            _id: Joi.string().required()
        });


        let {error} = addressSchema.validate(req.body); 

        if(error){ 
            return next(error); 
        }


        let user; 

        try{ 
           user =  await User.findOneAndUpdate({_id: req.body._id}, {$set: {address: req.body}}, {new: true}); 
        }catch(e){ 
            return next(e); 
        }

        return res.status(200).json(user); 
    }

}

export default userController; 