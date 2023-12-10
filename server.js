import express from 'express'; 
import { APP_PORT, MONGODB_CONNECTION_URL } from './config';
import mongoose from 'mongoose';
import router from './routes/web';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path'; 



const app = express(); 

// Middleware setup

app.use(expressEjsLayouts); 
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({extended: false})); 
app.use(express.json()); 
app.set('layout', 'layouts/layout.ejs'); 
app.use(router); 

const PORT = APP_PORT || 3001; 

// database connection with mongodb
mongoose.connect(MONGODB_CONNECTION_URL).then((res) => { 
    console.log('connected...'); 
}).catch(() => { 
    console.log('not connected...'); 
})






// listening to the server
app.listen(PORT, () => { 
    console.log(`server has been started ${PORT}`)
}); 