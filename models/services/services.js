import { boolean } from 'joi';
import mongoose from 'mongoose';  


const serviceSchema = new mongoose.Schema({ 
    service: { 
        type: String, 
        required: true
    }, 

    questionary:{ 
        type: Array, 
        required: true,
        default: []
    }, 

    isActive: { 
        type: Boolean, 
        default: false
    }, 

    isDeleted:{ 
        type: String, 
        default: false
    }
}, {timestamps: true}); 

export default mongoose.model('Service', serviceSchema); 