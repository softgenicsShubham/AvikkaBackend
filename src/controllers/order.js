const orderitem = require('../models/OrderItem')
const order = require('../models/order')
const product=require('../models/products')

const generate_order_id = () => {
    // Fixed prefix
    const prefix = "AVIK";

    // Generate random numbers for the remaining parts
    const random1 = Math.floor(Math.random() * 100000);
    const random2 = Math.floor(Math.random() * 1000000);

    // Concatenate the fixed prefix and random numbers to form the order ID
    const order_id = `${prefix}-${random1}-${random2}`;

    return order_id;
}


// Example usage


const create_order = async (req, res) => {

    const order_id = generate_order_id();
    console.log(req.body, 'reqbody')
    console.log(req.body.addressToSend, 'reqbody')

    const currentDate = new Date();
    const expectedDeliveryDate = new Date(currentDate.setDate(currentDate.getDate() + 7));
    console.log(expectedDeliveryDate,'expectedDeliveryDate')
    const userId = req.userData.user_id;

    try {
        const orderdata = await order.create({
            order_id: order_id,
            CustomerAddress:req.body.addressToSend,
            PaymentMethod:req.body.paymentInstrument[0].cardType,
            TransactionID:req.body.transactionId,
            PaymentStatus:req.body.state,
            OrderStatus:"confirmed",
            ShippingCost:0,
            TrackingNumber:4567894321,
            ExpectedDeliveryDate:expectedDeliveryDate,
            OrderDate:currentDate,
            TotalAmount:req.body.Subtotal,
            DiscountAmount:req.body.totalSavings,
            user_id:userId
        })
        for (const item of req.body.newmycart) {
            // Calculate total price after applying discount
            const totalPrice = item.quantity * item.product.product_price;
            const discountedPrice = totalPrice - (totalPrice * (item.product.discount / 100));

            await orderitem.create({
                
                quantity: item.quantity,
                price: discountedPrice,
                orderId: order_id,
                product_id: item.product.product_id
            });
        }
// console.log(orderdata,'orderdata')
        res.status(201).json({ message: 'Order created successfully', order_id });
} catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error generated while processing your request', error });

    }
}


const getorderdetail=async(req,res)=>{
    const userId = req.userData.user_id;

    try{
    //  const orderdata=await order.findAll({
    //     where:{
    //         user_id:userId
    //     },
    //     include: [orderitem],
    //  })
    //  const productItemsArray = await Promise.all(orderdata.map(async (order) => {
    //     const productitem = await orderitem.findAll({
    //         where: {
    //             orderId: order.order_id
    //         },
    //         include: [product],
    //     });
    //     // console.log(productitem.product[0],'productitem')
    //     return productitem;

    // }));

    // console.log({ orderdata, productItemsArray });

    const orderdata = await order.findAll({
        where: {
          user_id: userId
        },
        include: [
          {
            model: orderitem,
            include: [
              {
                model: product,
                attributes: ['product_id', 'product_thumnail_img']
              }
            ]
          }
        ],
        // raw: true, // Retrieve plain JSON objects
      });
      
      // Process the data as needed
      console.log(orderdata.length,'orderdata')
      res.json({ orderdata });
      

    // res.json({ orderdata, productItemsArray });
    // res.json({ orders: { orderdata, productItemsArray } });


    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Error generated while processing your request', error });

    }

}
module.exports = {
    create_order,
    getorderdetail
}