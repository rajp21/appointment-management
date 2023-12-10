import express from 'express'; 
import { APP_PORT, MONGODB_CONNECTION_URL } from './config';
import mongoose from 'mongoose';
import router from './routes/web';


const app = express(); 

const PORT = APP_PORT || 3001; 

// database connection with mongodb
mongoose.connect(MONGODB_CONNECTION_URL).then((res) => { 
    console.log('connected...'); 
}).catch(() => { 
    console.log('not connected...'); 
})


app.use(router);


app.get('/', (req, res) => { 
    res.send("everthing is fine"); 
}); 


// listening to the server
app.listen(PORT, () => { 
    console.log(`server has been started ${PORT}`)
}); 