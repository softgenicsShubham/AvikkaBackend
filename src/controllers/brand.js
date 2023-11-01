const Brand = require('../models/Brand');
const Product=require('../models/products')
const review=require('../models/Review')
const { Op } = require('sequelize');

 Product.hasMany(review, { foreignKey: 'product_id' }); // Define the association

const Addbrand = async (req, res) => {
    try {
        const { brand_name, brand_type } = req.body;
// console.log(brand_name,'bbbb')
// console.log(brand_type,'bbbb')

        // Check if brand_name and brand_type are present in req.body
        if (!brand_name || !brand_type) {
            return res.status(400).json({ message: 'Both brand_name and brand_type are required fields' });
        }

        const result = await Brand.create({
            brand_name: brand_name,
            brand_type: brand_type
        });
        // console.log(JSON.parse(JSON.stringify(result)))
        res.status(201).json({
            msg: 'success post',
            result: result
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getbrand= async (req, res) => {

    try{
        const result= await Brand.findAll();
        // res.json(products);
        // console.log(result,"pppppppp")
        if (!result) {
            return res.status(404).json({ error: 'Brand not found' });
        }

        return res.status(200).send({
          success: 'success',
          result: result,
        });
    
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });

    }
}

const getbrandproduct=async(req,res)=>{
    try {
        const brandName = req.params.brandName;
    
        // Find the brand based on the brand name
        const brand = await Brand.findOne({
          where: {
            brand_name: brandName,
          },
        });
    // console.log(brand,'brand')
        if (!brand) {
          return res.status(404).json({ message: 'Brand not found' });
        }
    
        // Find all products associated with the brand
        const products = await Product.findAll({
          where: {
            brand_id: brand.brand_id,
          },
          include: [
            {
              model: review, // Assuming you have a relationship between Products and Review
            },
          ],

        });
    
        res.json(products);
      } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    

}



const sortbydiscount = async (req, res) => {
  const brandName = req.params.brandName;

  try {
    const brand = await Brand.findOne({
      where: {
        brand_name: brandName,
      },
    });

    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    const discountProducts = await Product.findAll({
      order: [['discount', 'DESC']], // Sort by 'discount' in descending order
      where: {
        brand_id: brand.brand_id, // Filter products by brand ID
        discount: {
          [Op.gt]: 0, // Filter products with a discount greater than 0
        }
      }
    });

    res.status(200).json(discountProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


module.exports = {
    Addbrand,
    getbrand,
    getbrandproduct,
    sortbydiscount
}