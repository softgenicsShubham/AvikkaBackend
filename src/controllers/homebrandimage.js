const { Homebrandimage, Brand} = require('../models');

const multer = require('multer');
const path = require('path');

// ...

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/brandimage'); // Set the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Set the file name
  },
});

const upload = multer({ storage: storage });

const homebrandimage = async (req, res) => {
  console.log('INFO -> homebrandimage INFO API CALLED')

  try {
    upload.fields([{ name: 'brand_image', maxCount: 10 }])(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: 'File upload failed' });
      }

      const brand_image = req.files['brand_image'][0];
      const imageUrl = `uploads/brandimage/${brand_image.filename}`;

      // Create a new product record in the database
      Homebrandimage.create({
        brand_id: req.body.brand_id,
        brand_image: imageUrl, // Store the selected thumbnail image
      });

      res.status(200).json({ message: 'Product added to the wishlist successfully' });
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generated while processing your request', error });
  }
};


const getbrandimage = async(req,res) => {
  console.log('INFO -> getbrandimage INFO API CALLED')
try{
  const homebranddata = await Homebrandimage.findAll({
    include: [
      { model: Brand } // Wrap model in curly braces
    ]
  });
// console.log(homebranddata,'homebranddata')
  res.json(homebranddata)

}catch(error){
  console.error(error);
    res.status(500).json({ message: 'Error fetching products with associated offers' });
}
}

module.exports = {
  homebrandimage,
  getbrandimage
};
