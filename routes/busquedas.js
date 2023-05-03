/*
    Path: '/api/todo/:busqueda'
*/

const {Router}=require('express');
const{getTodo, getDocumentosColeccion}=require('../controllers/busquedas');
const router = Router();
const { validarJWT } = require('../middlewares/validar-JWT');



router.get('/:busqueda', validarJWT,getTodo);

router.get('/coleccion/:tabla/:busqueda', validarJWT,getDocumentosColeccion)

module.exports=router;