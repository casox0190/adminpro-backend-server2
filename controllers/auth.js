const {response}=require('express');

const bcrypt=require('bcryptjs');
const Usuario=require('../models/usuario');
const {generarJWT}=require('../helpers/JWT');


const login=async(req,res)=>{

const {email,password}=req.body;

try {

    //Verificar Email
    const usuarioDB=await Usuario.findOne({email});

    if(!usuarioDB){
        return res.status(404).json({
            ok:false,
            msg:'Email no encontrado'
        });
    }

    //Verificar contraseña
    const validarPassword=bcrypt.compareSync(password,usuarioDB.password);
    if(!validarPassword){
        return res.status(404).json({
            ok:false,
            msg:'Contraseña no valida'
        });
    }

    //Generar el TOKEN-JWT
    const token=await generarJWT(usuarioDB.id);
    res.json({
        ok:true,
        token
    });
    
} catch (error) {
    console.log(error);
    res.status(500).json({
        ok:false,
        msg:'Hable con el administrador'
    })
}

}

module.exports={
    login
}