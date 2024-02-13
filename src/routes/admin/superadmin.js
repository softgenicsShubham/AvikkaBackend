const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin/superadmin')
const subadminController = require('../../controllers/admin/subadmin')


router.post('/createsuperadmin/',adminController.createadmin)

router.post('/loginsuperadmin/',adminController.superadminlogin)

router.post('/createsubadmin/',subadminController.createadmin)

router.post('/loginsubadmin/',subadminController.subadminlogin)
router.get('/subadmin/',adminController.allsubadminget);
router.get('/subadminbyId/:id',adminController.subadmingetById);

router.put('/Editsubadminpermission/:id',adminController.editPermission);


module.exports = router;
