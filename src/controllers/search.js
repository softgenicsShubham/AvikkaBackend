const Products = require('../models/products')
const Brand = require('../models/Brand');

const { Op } = require('sequelize');



const searchresult=async(req,res)=>{

    console.log('INFO -> searchresult INFO API CALLED')


    try {
        const query = req.query.query.toLowerCase();
console.log(query,'queryqueryquery')
      const products = await Products.findAll({
        where: {
            product_name: { [Op.like]: `%${query}%` }, // Case-insensitive search for product name
        },
      });
  
      const brands = await Brand.findAll({
        where: {
            brand_name: { [Op.like]: `%${query}%` }, // Case-insensitive search for brand name
        },
      });
  
      const results = [...products, ...brands];
      res.json(results);
    } catch (error) {
      console.error('Error searching:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
//   });
  }
module.exports={
    searchresult
}