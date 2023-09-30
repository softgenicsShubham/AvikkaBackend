const Review=require('../models/Review')
// const Products = require('../models/products')
const AddReviewAndRating = async (req, res) => {
    try {
        const { product_id, user_id, rating, review_title, review_comment, review_img } = req.body;


        if (!product_id || !user_id || !rating || !review_title || !review_comment || !review_img) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Optionally, you can add additional validation for specific fields.
        if (typeof rating !== 'number' || rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Rating must be a number between 1 and 5' });
        }

        // Insert the review into the database using your Review model (assuming you have one).
        const result = await Review.create({
            product_id: product_id,
            user_id: user_id,
            rating: rating,
            review_title: review_title,
            review_comment: review_comment,
            review_img: review_img
        });

        res.status(201).json({
            message: 'Review and rating added successfully',
            result: result
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const getallreview=async(req,res)=>{
 try{
    const productid = req.params.productId;
    const reviews=await Review.findAll({
        where:{
            product_id: productid 
        }
    })
        // Calculate the total number of reviews
        const totalReviews = reviews.length;

        // Calculate the total rating by summing up the 'rating' field for all reviews
        let totalRating = 0;
        for (const review of reviews) {
          totalRating += review.rating;
        }
        let Averageproductrating=totalRating/5
    
    res.status(201).json({
        message: 'get all review detail by id',
        result: reviews  ,
        totalReviews: totalReviews,
        totalRating: Averageproductrating,
  
    });

 }catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
}
}
module.exports = {
    AddReviewAndRating,
    getallreview
  }