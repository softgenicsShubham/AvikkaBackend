const { Offer, Products, ProductOffer } = require('../models'); // Assuming you have these models


const PostOffer=async(req,res)=>{
    console.log('INFO -> PostOffer INFO API CALLED')

    try {
        const { title, description, discountType, discountValue, termsAndConditions,productId,active ,category,gift_id} = req.body;
    console.log(req.body,'diwakar kumarrrrrrr')
        // Create the offer in the database
        const newOffer = await Offer.create({
          title,
          description,
          discountValue,
          termsAndConditions,
          active, // Add "active" field
          category,
          discountType,
          gift_id
        });
    
        // Associate the offer with selected products
        if (productId && productId.length > 0) {
          const products = await Products.findAll({
            where: {
                product_id: productId,
            },
          });
          await newOffer.addProducts(products);
        }
    
        res.status(201).json({ message: 'Offer created and products linked successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating offer and linking products' });
      }
}

const getproductwithoffer=async(req,res)=>{   //feature section all details
  try {
    // Find all products with associated offers
    const productswithoffer = await Products.findAll({
      where:{
        place:'Featured'
      },
      attributes: { include: ['discount'] }, // Include the discount field from the product model

      include: {
        model: Offer,
        through: ProductOffer,
      },
    });
// console.log(productswithoffer,'productswithoffer')
    res.json(productswithoffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products with associated offers' });
  }
}
const getproductwithoffersinfo=async(req,res)=>{
  try {
    // Find all products with associated offers
    const allofferproduct = await Products.findAll({
      attributes: { include: ['discount'] }, // Include the discount field from the product model

      include: {
        model: Offer,
        through: ProductOffer,
      },
    });
// console.log(productswithoffer,'productswithoffer')
    res.json(allofferproduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products with associated offers' });
  }
}

const getofferdetail=async(req,res)=>{
console.log('getofferdetail api called')
try{
  const offerdetails = req.body;
console.log(offerdetails,'offerdetailsofferdetails')
  // Log the content of matchingProductOffer with indentation
 
  const offerIds = offerdetails.map(item => item.offerId);
  // const productId=offerdetails.map(item=>item.offerId)
  const offerDetailsFromDatabase = await Offer.findAll({
    where: {
      offer_id: offerIds
    }
  });
  const giftIds = offerDetailsFromDatabase.map(offer => offer.dataValues.gift_id);
  console.log(giftIds);

const productidbygift=await Products.findAll({
  where:{
    product_id:giftIds
  }
})

// console.log(productidbygift,'productidbygiftproductidbygiftproductidbygift');
res.json(productidbygift);
// console.log(offerIds)


}catch(error){
  console.error(error);
    res.status(500).json({ message: 'Error fetching products with associated offers' });
}
}


module.exports={
    PostOffer,
    getproductwithoffer,
    getproductwithoffersinfo,
  getofferdetail
}
