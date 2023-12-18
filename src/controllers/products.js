const Products = require('../models/products')
const Review = require('../models/Review')
const Specification=require('../models/specification')
const Brand=require('../models/Brand')
const multer = require('multer');
const path = require('path');
const  Sequelize  = require('sequelize')
const { fn, col, literal } = Sequelize;
const { Op } = require('sequelize');

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
  console.log('api called')
  try {
    // Handle file upload using multer
    // upload.single('product_image')(req, res, (err) => {
    //   if (err) {
    //     return res.status(400).json({ message: 'File upload failed' });
    //   }

    //   // Access the uploaded file via req.file
    //   const uploadedFile = req.file;
    upload.fields([{ name: 'product_thumnail_img', maxCount: 10 }, { name: 'ideal_for_img', maxCount: 10 }, { name: 'work_for_img', maxCount: 1 }, { name:'product_detail_allimage', maxCount: 10 }])(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: 'File upload failed' });
      }

      // Access the uploaded files via req.files
      //   const productImage = req.files['product_img'][0];
      const thumbnailImage = req.files['product_thumnail_img'][0];
      const allimages = req.files['product_detail_allimage']
      // console.log(allimages,'allimages')
      if (!allimages) {
        return res.status(400).json({ message: 'No files were uploaded for product_thumbnail_img' });
      }
      //     // const firstThumbnailImage = thumbnailImage[0];

      // // Access and work with all uploaded thumbnail images
      const allimagesUrls = allimages.map((allImage) => {
        return `uploads/productthumbnail/${allImage.filename}`;
      });
// console.log(allimagesUrls,'allimagesUrls')

      const ideal_for_img = req.files['ideal_for_img'][0];
      const work_for_img = req.files['work_for_img'][0];
      const imageUrl = `uploads/productthumbnail/${thumbnailImage.filename}`;
      const imageUrl_ideal_for_img = `uploads/productthumbnail/${ideal_for_img.filename}`;
      const imageUrl_work_for_img = `uploads/productthumbnail/${work_for_img.filename}`
      // console.log(imageUrl_ideal_for_img, 'imageUrl_ideal_for_img')

      const ideal_for = [];
      ideal_for.push({
        ideal_for_title: req.body.ideal_for_title,
        ideal_for_img: imageUrl_ideal_for_img,
      });
      const product_work_for = [];
      product_work_for.push({
        work_for_title: req.body.work_for_title,
        work_for_img: imageUrl_work_for_img
      })

      // Create a new product record in the database
      Products.create({
        product_name: req.body.product_name,
        product_categories: req.body.categories,
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
        highlights: req.body.highlights,
        ideal_for: ideal_for,
        product_work_for: product_work_for,
        product_expiry_date: req.body.product_expiry_date,
        categories_id: req.body.categories_id,
        subCategories_id: req.body.subCetegories_id,
        place: req.body.place,
        product_detail_allimage:allimagesUrls,
        product_color:req.body.product_color,
        product_quantity:req.body.product_quantity
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
    const Featured = await Products.findAll({
      where: {
        place: 'Featured'
      }
    })
    const Fashwash = await Products.findAll({
      where: {
        product_categories: 'Face Wash'
      }
    })
    const primer = await Products.findAll({
      where: {
        product_categories: 'Primer'
      }
    })
    // console.log(primer, 'primer')
    const products = await Products.findAll({
      include: [
        {
          model: Review, // Assuming you have a relationship between Products and Review
        },
        {
          model: Specification, // Assuming you have a relationship between Products and Review
        },
      ]
    });
    // res.json(products);
    // console.log(products, "pppppppp")

    return res.status(200).send({
      success: 'success',
      result: products,
      Featured: Featured,
      Fashwash: Fashwash,
      primer: primer
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

    // product.ideal_for = JSON.parse(JSON.stringify(product.ideal_for))


    return res.status(200).send({
      success: 'success',
      result: product,
    });


  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}







const fillterDataget = async (req, res) => {
  try {
      const {  option ,brandName} = req.body;
      let modifiedProducts = [];
      console.log(req.body,'req.bodyreq.bodyreq.body');

      //  // Calculate the date 20 days ago
      //  const twentyDaysAgo = new Date();
      //  twentyDaysAgo.setDate(twentyDaysAgo.getDate() - 20);
      //  console.log("date",twentyDaysAgo.setDate(twentyDaysAgo.getDate() - 20))

      // console.log(req.user.mobile_num);
      const brandid=await Brand.findOne({
        where:{
          brand_name:brandName
        }
      })
      
      console.log(brandid,'req.bodyreq.bodyreq.body');

     if (option === "highPrice") {

         
      const filteredProducts = await Products.findAll({
        where: {
          brand_id: brandid.brand_id
        },
        order: [['product_price', 'DESC']]
      });
      // console.log(filteredProducts,'filteredProducts')

          const newProducts = filteredProducts.filter(
              (product) => !modifiedProducts.some((existingProduct) => existingProduct.product_id === product.product_id)
          );

          modifiedProducts = [...modifiedProducts, ...newProducts];
          console.log(modifiedProducts,'modifiedProducts')
          res.status(200).send(modifiedProducts);

      } else if (option === "lowPrice") {
          const filteredProducts = await Products.findAll({
            where: {
              brand_id: brandid.brand_id
            },
              order: [['product_price', 'ASC']],
          });

          const newProducts = filteredProducts.filter(
              (product) => !modifiedProducts.some((existingProduct) => existingProduct.product_id === product.product_id)
          );

          modifiedProducts = [...modifiedProducts, ...newProducts];
          res.status(200).send(modifiedProducts);

      }else if (option === "discount") {
          const filteredProducts = await Products.findAll({
            where: {
              brand_id: brandid.brand_id
            },
              order: [['discount', 'DESC']],
          });

          const newProducts = filteredProducts.filter(
              (product) => !modifiedProducts.some((existingProduct) => existingProduct.product_id === product.product_id)
          );

          modifiedProducts = [...modifiedProducts, ...newProducts];
          res.status(200).send(modifiedProducts);

      }else if (option === 'AverageRating') {
        const ratingQuery = await Review.findAll({
          attributes: [
            'product_id',
            [Sequelize.fn('AVG', Sequelize.col('rating')), 'averageRating']
          ],
          group: ['product_id'],
          raw: true,
        });
        
        const productIdsWithAverageRating = ratingQuery.map((rating) => ({
          productId: rating.product_id,
          averageRating: parseFloat(rating.averageRating),
        }));
        
        // Your existing code for filtered products
        const filteredProducts = await Products.findAll({
          where: {
            brand_id: brandid.brand_id
          }
        });
        
        // Find the intersection of product IDs
        const commonProductIds = filteredProducts
          .filter(product => productIdsWithAverageRating.some(ratingProduct => ratingProduct.productId === product.id))
          .map(product => product.id);
        
        // Filter products based on common product IDs
        const modifiedProducts = filteredProducts.filter(product => commonProductIds.includes(product.id));
        
        // Add new products to modifiedProducts
        const newProducts = filteredProducts.filter(
          (product) => !modifiedProducts.some((existingProduct) => existingProduct.product_id === product.product_id)
        );
        
        // Combine products with their average ratings only for matched products
        const updatedModifiedProducts = modifiedProducts
          .map(product => {
            const averageRatingObj = productIdsWithAverageRating.find(ratingProduct => ratingProduct.productId === product.id);
            return {
              ...product.dataValues,
              averageRating: averageRatingObj ? averageRatingObj.averageRating : null,
            };
          })
          .concat(newProducts); // Concatenate new products without average ratings
        
        // Sort the products by average rating in ascending order
        updatedModifiedProducts.sort((a, b) => {
          return (a.averageRating || 0) - (b.averageRating || 0);
        });
        
        // Now, updatedModifiedProducts contains both modified products and new products with average ratings, ordered by average rating in ascending order
        // console.log(updatedModifiedProducts);
        // res.status(200).send(updatedModifiedProducts);
        
        // Now, updatedModifiedProducts contains both modified products and new products with average ratings for matched products
        console.log(updatedModifiedProducts,'updatedModifiedProductsupdatedModifiedProducts');
        // res.status(200).send(updatedModifiedProducts);
        
        res.status(200).send(updatedModifiedProducts);
      }
  } catch (error) {
      console.error("Error in fillterDataget:", error);
      res.status(500).send("Internal Server Error");
  }
};



const applyfilter=async(req,res)=>{
  try {
    const { brandName, categories, discounts, priceRange } = req.body;
console.log(req.body,'req.body')
    const filter = {};

    // Apply filters based on request parameters
    if (brandName) {
      // Assuming you have a Brand model with a 'name' column
      const brand = await Brand.findOne({ where: { brand_name: brandName } });
      if (brand) {
        filter.brand_id = brand.brand_id;
      }
    }

    if (categories && categories.length > 0) {
      filter.product_categories = { [Op.in]: categories };
    }

    if (discounts && discounts.length > 0) {
      filter.discount = { [Op.in]: discounts };
    }

    if (priceRange && priceRange.min !== undefined && priceRange.max !== undefined) {
      filter.product_price = { [Op.between]: [priceRange.min, priceRange.max] };
    }

    // Use findAll with the filter conditions
    const filteredProducts = await Products.findAll({
      where: filter,
     
    });
console.log(filteredProducts,'filteredProductsfilteredProducts')
    res.json(filteredProducts);
  } catch (error) {
    console.error('Error filtering products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
  Addproduct,
  getproduct,
  productdetail,
  fillterDataget,
  applyfilter
}