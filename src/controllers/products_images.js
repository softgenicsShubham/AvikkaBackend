const ProductsImages=require('../models/products_images')
const multer = require('multer');
const path = require('path');

// ...

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/'); // Set the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Set the file name
  },
});

const upload = multer({ storage: storage });

const AddImaages = async (req, res) => {
  try {
    // Handle file upload using multer
    // upload.single('product_image')(req, res, (err) => {
    //   if (err) {
    //     return res.status(400).json({ message: 'File upload failed' });
    //   }

    //   // Access the uploaded file via req.file
    //   const uploadedFile = req.file;
    upload.fields([ { name: 'image_url', maxCount: 10 }])(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: 'File upload failed' });
      }

      // Access the uploaded files via req.files
    //   const productImage = req.files['product_img'][0];
      const image_url = req.files['image_url'][0];

      // Create a new product record in the database
      ProductsImages.create({
        product_id: req.body.product_id,
        image_description: req.body.image_description,
        image_url:image_url.filename ,
        isPrimary: req.body.isPrimary,
      });

      return res.json({ message: 'Product added successfully' });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports = {
    AddImaages
}