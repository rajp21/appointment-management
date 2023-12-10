import mongoose from 'mongoose'; 
const {model, Schema} = mongoose; 


    
    
    
const userSchema = new Schema({ 
    fullName: { 
        type: String, required: true
    }, 

    phoneNo: { 
        type: String, required: true
    }, 

    emailId: { 
        type: String
    }, 

    age: { 
        type: String, 
        required: true
    }, 

    gender: { 
        type: String, 
        required: true
    },

    weight: { 
        type: String, 
        required: true
    }, 
    
    address: { 
        flatNoOrhouseNo: { type: String }, 
        buildingOrApartment: { type: String }, 
        StreetOrAreaName: { type: String }, 
        cityName: { type: String }, 
        state: { type: String }, 
        pincode: { type: String }, 
        geolocation: {type: String, default: null}
    }, 

    password: { 
        type: String, 
        default: null
    }
}, { timestamps: true }); 



export default model('User', userSchema); 