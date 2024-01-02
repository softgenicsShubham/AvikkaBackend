const { Offer, Products, } = require('../models'); // Assuming you have these models
const usedOffer=require('../models/usedOffer')

const getAllOffers = async (req, res) => {
    try {
      const offers = await Offer.find();
      res.json(offers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const ProductOffer = async (req, res) => {
    try {
      const offers = await Offer.find();
      res.json(offers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };



const appliedOffer=async(req,res)=>{
const id=req.userData.id;
const offer_id=req.body.offer_id;

try{
    // const result=await usedOffer.find({
    //     where:{offer_id:offer_id,
    //     user_id:id}}
    // )
    
        await usedOffer.create({       
            offer_id:offer_id,
            user_id:id
        });
    
    

        res.status(200).json({ message: 'Error generated while processing your request', result }); 
   
    
}catch(error){
    console.error(error);
    res.status(500).json({ message: 'Error generated while processing your request', error });
}
}

module.exports={
    appliedOffer,
    getAllOffers,
    ProductOffer
    
}