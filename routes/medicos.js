/*
    Medicos
    ruta: /api/medicos
*/


const {Router}=require('express');
const {check} =require('express-validator');
const{validarCampos}=require('../middlewares/validarCampos');
const {getMedicos,crearMedico,actualizarMedico,deleteMedico}= require('../controllers/medicos');
const {validarJWT}=require('../middlewares/validar-JWT');


const router = Router();


router.get('/',getMedicos);

router.post('/',
    [
        validarJWT,
        check('nombre','el nombre del médico es necesario').not().isEmpty(),
        check('hospital','el hospital id deber ser validado').isMongoId(),
        validarCampos 
    ],
crearMedico);

router.put('/:id',
    [   
        
    ]
,actualizarMedico);

router.delete('/:id',

deleteMedico);

module.exports=router;