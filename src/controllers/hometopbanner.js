const  Hometopbanner= require('../models/hometopbanner');

const multer = require('multer');
const path = require('path');

// ...

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/home_top_banner_image'); // Set the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Set the file name
  },
});

const upload = multer({ storage: storage });

const hometopbannerimage = async (req, res) => {
    console.log('INFO -> hometopbannerimage INFO API CALLED')

  try {
    upload.fields([{ name: 'home_top_banner_image', maxCount: 10 }])(req, res, (err) => {
        if (err) {
          return res.status(400).json({ message: 'File upload failed' });
        }
  
        const image = req.files['home_top_banner_image'][0];
        const imageUrl = `uploads/home_top_banner_image/${image.filename}`;
  
        // Create a new product record in the database
        Hometopbanner.create({
            home_top_banner_image: imageUrl, // Store the selected thumbnail image
            imageType:req.body.imageType
        });
    
    res.status(200).json({ message: 'image added to the home_top_banner successfully' });
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generated while processing your request', error });
  }
};

const gethometopbanner = async (req, res) => {
    console.log('INFO -> gethometopbanner INFO API CALLED')
    try {
        // Assuming you have access to the user's ID after authentication

        // Query the database to get the user's cart products
        const topbanner = await Hometopbanner.findAll();

        // If cartProducts is an array of cart items, you can send it as a JSON response
        console.log(topbanner,'cartProducts')
        res.status(200).json({ topbanner });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error generated while processing your request', error });
    }
}

module.exports = {
    hometopbannerimage,
    gethometopbanner
};
