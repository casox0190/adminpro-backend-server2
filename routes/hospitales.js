/*  Hospitales
    ruta: /api/hospitales
*/


const {Router}=require('express');
const {check} =require('express-validator');
const{validarCampos}=require('../middlewares/validarCampos');
const {validarJWT}=require('../middlewares/validar-JWT');

const{ getHospitales, crearHospital,actualizarHospital,deleteHospital}=require('../controllers/hospitales')

const router = Router();


router.get('/',getHospitales);

router.post('/',
    [
        validarJWT,
        check('nombre','el nombre del hospital es necesario').not().isEmpty(),
       
        validarCampos
    ],
crearHospital);

router.put('/:id',
    [   
        
    ]
,actualizarHospital);

router.delete('/:id',

deleteHospital);

module.exports=router;