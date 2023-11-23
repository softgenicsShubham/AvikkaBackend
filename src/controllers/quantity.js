const quantity=require('../models/Quantity')


const AddQuantity=async(req,res)=>{
    console.log('INFO -> Quantity INFO API CALLED')


    try{
        const { quantity_value} = req.body;
console.log(quantity_value)
        const addQuantity=await quantity.create({

            quantity_value:quantity_value
        })
      return res.json(addQuantity);

    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Error creating Quantity ' });
    }
}
module.exports={
    AddQuantity
}