require ('dotenv').config();

const express=require('express');
const cors=require('cors');

const {dbConnection}=require('./database/config');

//Crear el servidor de express
const app=express();

//Configurar Cors
app.use(cors());


//Base de datos
dbConnection();

//Rutas
app.get('/',(req,res)=>{

    res.status(400).json({
        ok:true,
        msg:'Hola mundo'
    });
});

//Levantar el servidor
app.listen(process.env,()=>{
    console.log('servidor corriendo en el puerto'+process.env)
});