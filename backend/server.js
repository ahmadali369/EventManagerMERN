require('dotenv').config();

const express = require('express'); 
const mongoose = require('mongoose'); 
const ServiceRoutes = require('./routes/venderRoutes'); 


const app = express(); 

app.use(express.json());


app.use((req, res, next) => {
    console.log(req.path, req.method); 
    next(); 
})


app.use('/api/services', ServiceRoutes); 


mongoose.connect(process.env.MONGO_URI).then(()=>{

    console.log('connected to database'); 
    app.listen(process.env.PORT, ()=>{

        console.log('listining for req on port', process.env.PORT)
    })
}).catch((err) =>{
    console.log(err); 
})