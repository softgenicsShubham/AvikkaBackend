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
router.delete('/adminDelete/:id',adminController.subadmindelete);
router.put('/Editsubadminpermission/:id',adminController.editPermission);

router.post('/send',adminController.sendopt);
router.post('/adminForget',adminController.forget);
router.post('/subadminForget',subadminController.forget);

router.put('/editsubadminpassword',subadminController.passwordedit);
router.put('/editsuperadminpassword',adminController.passwordedit);

module.exports = router;
