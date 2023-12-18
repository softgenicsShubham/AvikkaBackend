

const specification=require('../../models/specification')
const product=require('../../models/products')

const Addproductspecification=async(req,res)=>{
    console.log('INFO -> Addproductspecification INFO API CALLED')

    const { type,benefits,primary_concerns,country,product_id} = req.body;
console.log(req.body)
    try{

        const productspecification=await specification.create({
           
            benefits:benefits,
            primary_concerns:primary_concerns,
            country:country,
            product_id:product_id,
            type:type
            
        })
        
          
      return res.json(productspecification);

    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Error creating Addproductspecification ' });
    }
}
module.exports={
    Addproductspecification
}