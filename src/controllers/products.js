const Products = require('../models/products')
const multer = require('multer');
const path = require('path');

// ...

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/productthumbnail'); // Set the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Set the file name
  },
});

const upload = multer({ storage: storage });

const Addproduct = async (req, res) => {
  try {
    // Handle file upload using multer
    // upload.single('product_image')(req, res, (err) => {
    //   if (err) {
    //     return res.status(400).json({ message: 'File upload failed' });
    //   }

    //   // Access the uploaded file via req.file
    //   const uploadedFile = req.file;
    upload.fields([{ name: 'product_thumnail_img', maxCount: 10 }, { name: 'ideal_for_img', maxCount: 10 },{name:'work_for_img',maxCount: 1}])(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: 'File upload failed' });
      }

      // Access the uploaded files via req.files
      //   const productImage = req.files['product_img'][0];
      const thumbnailImage = req.files['product_thumnail_img'][0];
      const ideal_for_img = req.files['ideal_for_img'][0];
      const work_for_img=req.files['work_for_img'][0];
      const imageUrl = `uploads/productthumbnail/${thumbnailImage.filename}`;
      const imageUrl_ideal_for_img = `uploads/productthumbnail/${ideal_for_img.filename}`;
      const imageUrl_work_for_img=`uploads/productthumbnail/${work_for_img.filename}`
      console.log(imageUrl_ideal_for_img, 'imageUrl_ideal_for_img')

      const ideal_for = [];
      ideal_for.push({
        ideal_for_title: req.body.ideal_for_title,
        ideal_for_img: imageUrl_ideal_for_img,
      });
const product_work_for=[];
product_work_for.push({
  work_for_title:req.body.work_for_title,
  work_for_img:imageUrl_work_for_img
})

      // Create a new product record in the database
      Products.create({
        product_name: req.body.product_name,
        categories: req.body.categories,
        brand_id: req.body.brand_id,
        product_title: req.body.product_title,
        product_description: req.body.product_description,
        product_price: req.body.product_price,
        // product_img: productImage.filename, // Store the selected product image
        product_thumnail_img: imageUrl, // Store the selected thumbnail image
        product_ad: req.body.product_ad,
        offer: req.body.offer,
        count_in_stock: req.body.count_in_stock,
        rating: req.body.rating,
        discount: req.body.discount,
        highlights:req.body.highlights,
        ideal_for: ideal_for,
        product_work_for:product_work_for,
        product_expiry_date:req.body.product_expiry_date
      });

      return res.json({ message: 'Product added successfully', Products });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getproduct = async (req, res) => {

  try {
    const products = await Products.findAll();
    // res.json(products);
    console.log(products, "pppppppp")

    return res.status(200).send({
      success: 'success',
      result: products,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

const productdetail = async (req, res) => {
  try {
    const productId = req.params.productId;

    let product = await Products.findOne({
      where: {
        product_id: productId
      },
    })

    product = JSON.parse(JSON.stringify(product))

    product.ideal_for = JSON.parse(JSON.stringify(product.ideal_for))


    return res.status(200).send({
      success: 'success',
      result: product,
    });


  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = {
  Addproduct,
  getproduct,
  productdetail
}