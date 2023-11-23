

const specification=require('../models/specification')
const product=require('../models/products')

const Addproductspecification=async(req,res)=>{
    console.log('INFO -> Addproductspecification INFO API CALLED')

    const { skin_type,hair_type,benefits,primary_concerns,country,product_id} = req.body;
console.log(req.body)
    try{

        const productspecification=await specification.create({
           
            benefits:benefits,
            primary_concerns:primary_concerns,
            country:country,
            product_id:product_id
            
        })
        
          if(skin_type){
            productspecification.skin_type=skin_type
          }
          if(hair_type){
            productspecification.hair_type=hair_type
          }
      return res.json(productspecification);

    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Error creating Addproductspecification ' });
    }
}
module.exports={
    Addproductspecification
}