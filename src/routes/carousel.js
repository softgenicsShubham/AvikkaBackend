const express = require('express');
const route = express.Router();
const multer = require('multer');
const path = require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/banner')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
})

const upload = multer({ storage: storage })

const carouselController = require('../controllers/carouselController')

route.post('/carousel/', upload.single('image_url'), carouselController.banner)
route.get('/carousel/all/', carouselController.getAllData)
route.get('/carousel/:id/', carouselController.getbyId)
route.delete('/carousel/delete/:id/', carouselController.deleteBannerById)
route.put('/carousel/edit/:id/', carouselController.editBannerById)

module.exports = route