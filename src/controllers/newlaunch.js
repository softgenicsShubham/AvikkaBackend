const Products = require('../models/products')
const Review = require('../models/Review')
const Specification=require('../models/specification')
const Brand=require('../models/Brand')







const newlaunchage_product = async (req, res) => {
    try {
      const newLaunchProducts = await Products.findAll({
        where: {
          newlaunchage_product: 1
        },
        include: [
          {
            model: Review,
          },
          {
            model: Specification,
          },
        ]
      });
  console.log(newLaunchProducts,'newLaunchProducts')
      return res.status(200).send({
        success: 'success',
        result: newLaunchProducts
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };













module.exports = {
    newlaunchage_product,
  
}