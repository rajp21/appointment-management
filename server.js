import express from 'express'; 
import { APP_PORT, MONGODB_CONNECTION_URL } from './config';
import mongoose from 'mongoose';
import router from './routes/web';
import apirouter from './routes/web/api'; 
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path'; 
import errorHandler from './middlewares/errorHalder';
import adminRouter from './routes/admin/api'; 


const app = express(); 

// Middleware setup

app.use(expressEjsLayouts); 
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({extended: false})); 
app.use(express.json()); 
app.set('layout', 'layouts/layout.ejs'); 
app.use(router); 
app.use('/api', apirouter); 
app.use('/admin/api', adminRouter); 
const PORT = APP_PORT || 3001; 

// database connection with mongodb
mongoose.connect(MONGODB_CONNECTION_URL).then((res) => { 
    console.log('connected...'); 
}).catch((e) => { 
    console.log('not connected...'); 
}); 


app.use(errorHandler); 

// listening to the server
app.listen(PORT, () => { 
    console.log(`server has been started ${PORT}`)
}); 