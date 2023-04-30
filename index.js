const express=require('express');
require ('dotenv').config();
const {dbConnection}=require('./database/config');
const cors=require('cors');



//Crear el servidor de express
const app=express();

//Configurar Cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Base de datos
dbConnection();

//Rutas
app.use('/api/usuarios',require('./routes-user/usuarios'));
app.use('/api/login',require('./routes-login/auth'));

//Levantar el servidor
app.listen(process.env,()=>{
    console.log('servidor corriendo en el puerto '+process.env.port)
});