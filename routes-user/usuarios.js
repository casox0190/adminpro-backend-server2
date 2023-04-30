/*
    Ruta: /api/usuarios
*/


const express=require('express');
const {Router}=require('express');
const {getUsuarios,crearUsuario,actualizarUsuario,deleteUsuario}= require('../controllers/usuarios');

// const router=Router();
const router = Router();
const {check} =require('express-validator');
const{validarCampos}=require('../middlewares/validarCampos');
const {validarJWT}=require('../middlewares/validar-JWT');




router.get('/',validarJWT,getUsuarios);

router.post('/',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('password','El password es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        validarCampos
    ],
crearUsuario);

router.put('/:id',
    [   
        validarJWT,
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('role','El role es obligatorio').not().isEmpty(),
        validarCampos
       
    ]
,actualizarUsuario);

router.delete('/:id',
validarJWT,
deleteUsuario);

module.exports=router;