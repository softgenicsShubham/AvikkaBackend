const { Console } = require('console');
const Products = require('../../models/products')
const Review = require('../../models/Review');
const seller = require('../../models/sellers');
const Specification=require('../../models/specification')
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
  console.log('add product seller api called')
  try {
    console.log(req.userData.seller_id,'emailemail')

    upload.fields([{ name: 'product_thumnail_img', maxCount: 10 }, { name: 'ideal_for_img', maxCount: 10 }, { name: 'work_for_img', maxCount: 1 }, { name:'product_detail_allimage', maxCount: 10 }]) (req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: 'File upload failed' });
      }

      // Access the uploaded files via req.files
      //   const productImage = req.files['product_img'][0];
      console.log(req.body)

      const thumbnailImage = req.files['product_thumnail_img'][0];

      // console.log(thumbnailImage,'thumbnailImagethumbnailImagethumbnailImage')
      const allimages = req.files['product_detail_allimage']
      console.log(allimages,'allimages')
      if (!allimages) {
        return res.status(400).json({ message: 'No files were uploaded for product_thumbnail_img' });
      }
      //     // const firstThumbnailImage = thumbnailImage[0];

      // // Access and work with all uploaded thumbnail images
      const allimagesUrls = allimages.map((allImage) => {
        return `uploads/productthumbnail/${allImage.filename}`;
      });
console.log(allimagesUrls,'allimagesUrls')

      const ideal_for_img = req.files['ideal_for_img'][0];
      const work_for_img = req.files['work_for_img'][0];
      const imageUrl = `uploads/productthumbnail/${thumbnailImage.filename}`;
      const imageUrl_ideal_for_img = `uploads/productthumbnail/${ideal_for_img.filename}`;
      const imageUrl_work_for_img = `uploads/productthumbnail/${work_for_img.filename}`
      console.log(imageUrl_ideal_for_img, 'imageUrl_ideal_for_img')

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
      // const colordata=[];

      // const email = req.userData;
      // console.log(req.userData,'emailemail')
      // const result = await seller.findOne({
      //   where: {
      //     email_address: email
      //   }
      // });
      // console.log(result,'resultresultresult')
      
      // if (!result) {
      //   return res.status(404).json({ message: 'Seller not found' });
      // }
      // Create a new product record in the database
      const productColorData = req.body.product_color;
 const colorNames = productColorData.split(',');
 const cleanedColorNames = colorNames.filter((name) => name.trim() !== '');
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
        newlaunchage_product:req.body.newlaunchage_product,
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
        product_color:cleanedColorNames,
        product_quantity:req.body.product_quantity,
        seller_id:req.userData.seller_id
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





const gettotalindivisualproduct = async (req, res) => {
  console.log('gettotalindivisualproduct api called');
  try {
    const productCount = await Products.count({
      where: {
        seller_id: req.userData.seller_id,
      },
    });

    return res.status(200).json({ totalProducts: productCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const sellergetproduct=async(req,res)=>{
  console.log('sellergetproduct api called')
  try{
    const sellerallproduct = await Products.findAll({
      where: {
        seller_id: req.userData.seller_id,
      },
    });
    return res.status(200).json(sellerallproduct);

  }catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

const sellergetproductid=async(req,res)=>{
  console.log('sellergetproductid api called')
  try{
    const productId = req.params.id;

    const sellerallproductbyid = await Products.findOne({
      where: {
        seller_id: req.userData.seller_id,
        product_id:productId
      },
      include: [
        {
          model: Review, // Assuming you have a relationship between Products and Review
        }
       
      ]
      
    });
    return res.status(200).json(sellerallproductbyid);

  }catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}



// const sellergetproducteditid=async(req,res)=>{
//   console.log('sellergetproducteditid api called')
//   try{
//     const productId = req.params.id;

//     const sellerallproductbyeditid = await Products.findOne({
//       where: {
//         seller_id: req.userData.seller_id,
//         product_id:productId
//       },
//       include: [
//         {
//           model: Review, // Assuming you have a relationship between Products and Review
//         }
       
//       ]
      
//     });
//     return res.status(200).json(sellerallproductbyeditid);

//   }catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// }







const editproduct = async (req, res) => {
  console.log('editproduct seller api called');
  try {
    const productId = req.params.id;
    const sellerId = req.userData.seller_id;
    console.log(req.userData.seller_id,productId, 'emailemail');

    // Find the product to be updated
    const existingProduct = await Products.findOne({
     where:{ seller_id: sellerId,
      product_id: productId,}
    });

    if (!existingProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    upload.fields([
      { name: 'product_thumnail_img', maxCount: 10 },
      { name: 'ideal_for_img', maxCount: 10 },
      { name: 'work_for_img', maxCount: 1 },
      { name: 'product_detail_allimage', maxCount: 10 },
    ])(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: 'File upload failed' });
      }

      
      console.log(req.body)

      const thumbnailImage = req.files['product_thumnail_img'][0];

      // console.log(thumbnailImage,'thumbnailImagethumbnailImagethumbnailImage')
      const allimages = req.files['product_detail_allimage']
      console.log(allimages,'allimages')
      if (!allimages) {
        return res.status(400).json({ message: 'No files were uploaded for product_thumbnail_img' });
      }
      //     // const firstThumbnailImage = thumbnailImage[0];

      // // Access and work with all uploaded thumbnail images
      const allimagesUrls = allimages.map((allImage) => {
        return `uploads/productthumbnail/${allImage.filename}`;
      });
console.log(allimagesUrls,'allimagesUrls')

      const ideal_for_img = req.files['ideal_for_img'][0];
      const work_for_img = req.files['work_for_img'][0];
      const imageUrl = `uploads/productthumbnail/${thumbnailImage.filename}`;
      const imageUrl_ideal_for_img = `uploads/productthumbnail/${ideal_for_img.filename}`;
      const imageUrl_work_for_img = `uploads/productthumbnail/${work_for_img.filename}`
      console.log(imageUrl_ideal_for_img, 'imageUrl_ideal_for_img')

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
      // Update the existing product
      // const product_name=req.body.product_name;
      // const product_categories=req.body.categories;
      // const updatedata={
      //   product_name,
      // product_categories,
      
      // }

 // Handle color data
 const productColorData = req.body.product_color;
 const colorNames = productColorData.split(',');
 const cleanedColorNames = colorNames.filter((name) => name.trim() !== '');



      existingProduct.product_name = req.body.product_name;
      existingProduct.product_categories = req.body.categories;
      existingProduct.brand_id = req.body.brand_id;
      existingProduct.product_title = req.body.product_title;
      existingProduct.product_description = req.body.product_description;
      existingProduct.product_price = req.body.product_price;
      existingProduct.product_thumnail_img = imageUrl;
      existingProduct.product_ad = req.body.product_ad;
      existingProduct.newlaunchage_product=req.body.newlaunchage_product;
      existingProduct.offer = req.body.offer;
      existingProduct.count_in_stock = 10;
      existingProduct.rating = req.body.rating;
      existingProduct.discount = req.body.discount;
      existingProduct.highlights = req.body.highlights;
      existingProduct.ideal_for = ideal_for;
      existingProduct.product_work_for = product_work_for;
      existingProduct.product_expiry_date = req.body.product_expiry_date;
      existingProduct.categories_id = req.body.categories_id;
      existingProduct.subCategories_id = req.body.subCetegories_id;
      existingProduct.place = req.body.place;
      existingProduct.product_detail_allimage = allimagesUrls;
      existingProduct.product_color = cleanedColorNames;
      existingProduct.product_quantity = req.body.product_quantity;
      // existingProduct.set(updatedata); // Use the set method to update properties
      await existingProduct.save();// Save the updated product

      return res.json({ message: 'Product updated successfully', product: existingProduct });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


const deleteproduct = async (req, res) => {
  console.log('deleteproduct api called')
    try {
    //   const userId = req.userData.user_id; // Adjust this based on your authentication mechanism
      const product_id = req.params.id;
  console.log(product_id,'color_id')
      const existingproduct = await Products.findOne({
        where: {
          product_id: product_id,
          seller_id :req.userData.seller_id
        },
      });
  
      if (!existingproduct) {
        return res.status(404).json({ message: 'product not found ' });
      }
  
      await existingproduct.destroy();
      console.log(existingproduct,'existingcolorItem')
  
      res.status(200).json({ message: 'product removed from the data base successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error generated while processing your request', error });
    }
  };
  


module.exports = {
  Addproduct,
  getproduct,
  gettotalindivisualproduct,
  sellergetproduct,
  sellergetproductid,
  editproduct,
  deleteproduct
}
// brand_id : req.body.brand_id,
//       product_title : req.body.product_title,
//       product_description : req.body.product_description,
//      product_price :req.body.product_price,
//       product_thumnail_img : imageUrl,
//       product_ad :req.body.product_ad,
//       offer :req.body.offer,
//      count_in_stock : 10,
//       rating : req.body.rating,
//       discount : req.body.discount,
//       highlights :req.body.highlights,
//      ideal_for : ideal_for,
//       product_work_for :product_work_for,
//       product_expiry_date : req.body.product_expiry_date,
//       categories_id :req.body.categories_id,
//      subCategories_id:req.body.subCetegories_id,
//       place : req.body.place,
//      product_detail_allimage : allimagesUrls,
//       product_color :req.body.product_color,
//       product_quantity : req.body.product_quantity