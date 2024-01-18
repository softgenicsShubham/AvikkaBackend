
const Gift = require('../models/add_gift')
const product=require('../models/products')

const { sq } = require("../config/db");
const { Sequelize } = require('sequelize');

const add_gift = async (req, res) => {
    console.log('INFO -> add Gift API CALLED')

    try {
        const product_id = req.body.product_id;
        console.log(req.body.product_id, 'diwakar kumarrrrrrr')
        // Create the offer in the database
        const newOffer = await Gift.create({
            product_id:product_id,
            
        });
        res.status(201).json({ message: 'Gift added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Gift added' });
    }
}

const deleteGift = async (req, res) => {
  console.log("delete function")
  try {
    const gift_id = req.params['id']; // Corrected spelling from 'parms' to 'params'
    const result = await Gift.destroy({ // Changed 'delete' to 'destroy'
      where: { product_id: gift_id }
    });
    
    if (result === 1) { // Checking if 1 row was affected (deleted)
      res.status(200).json({ message: 'Successfully deleted' });
    } else {
      res.status(404).json({ message: 'Gift not found' }); // Handle case where no gift was deleted
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting gift' });
  }
};


const view_add_gift = async (req, res) => {
    try {
      const allGifts = await Gift.findAll();
      const productIds = allGifts.map(gift => gift.product_id);
  
      const productsAssociatedWithGifts = await product.findAll({
        where: {
          product_id: productIds,
        },
      });
  
      res.status(200).json(productsAssociatedWithGifts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching products with associated offers' });
    }
  };
  const view_gift = async (req, res) => {
    try {
      const result = await sq.query(
        'SELECT g.gift_id, g.product_id AS gift_product_id, p.product_id AS product_id, p.product_title, p.product_price,p.product_thumnail_img ' +
        'FROM gifts g ' +
        'INNER JOIN products p ON g.product_id = p.product_id',
        { type: Sequelize.QueryTypes.SELECT }
      );
  
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching gifts and products' });
    }
  };
  
  
  

module.exports = {
    add_gift,
    deleteGift,
    view_add_gift,
    view_gift
}
