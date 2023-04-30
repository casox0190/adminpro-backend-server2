/*
    Path: '/api/login'
*/

const {Router}=require('express');
const{login}=require('../controllers/auth');
const{check}=require('express-validator');
const router = Router();

const {validarCampos}=require('../middlewares/validarCampos');



router.post('/',
[
 check('email','El email es obligatorio').isEmail(),
 check('password','El password es obligatiorio').not().isEmpty(),
 validarCampos
],
login

)

module.exports=router;