// // const {  productoffer } = require('../models/'); // Assuming you have these models
// const productoffer=require('../models/productoffer')
// const { Offer, Products, ProductOffer } = require('../models'); // Assuming you have these models
// const  sequelize  = require('sequelize')


// const getproductoffer=async(req,res)=>{
//     console.log('product offer api called')
//   try {
//     // Find all products with associated offers
//     const allProductOffers = await productoffer.findAll();
// console.log(allProductOffers,'allproductoffer')
//     // res.json(allproductoffer);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching productsoffer ' });
//   }
// }

const { sq } = require('../config/db');

const getproductoffer = async (req,res) => {
        console.log('product offer api called')

    try {
      const [results, metadata] = await sq.query('SELECT * FROM ProductOffer');
    //   console.log(results,'results')
      res.json(results);
    } catch (error) {
      console.error('Error fetching ProductOffers:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    getproductoffer
  };
// module.exports={
//     getproductoffer
// }