const Review = require('../models/Review')
const registration = require('../models/registration')
const multer = require('multer');
const path = require('path');




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/review_img');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});







const upload = multer({ storage: storage });





const AddReviewAndRating = async (req, res) => {
  try {
    upload.fields([{ name: 'review_img', maxCount: 10 }])(req, res, async (err) => {

      const { product_id, user_id, rating, review_title, review_comment } = req.body;

      console.log("product_id:", product_id);
      console.log("user_id:", user_id);
      console.log("rating:", typeof rating);
      console.log("review_title:", review_title);
      console.log("review_comment:", review_comment);


      const reviewImg = req.files['review_img'][0];


      console.log('reviewImg', reviewImg)

      const imageUrl = `uploads/review_img/${reviewImg.filename}`;

      if (!product_id || !user_id || !rating || !review_title || !review_comment || !imageUrl) {
        return res.status(203).json({ message: 'All fields are required' });
      }

      const newRating = Number(rating)



      if (newRating < 1 || newRating > 5) {
        return res.status(203).json({ message: 'Rating must be a number between 1 and 5' });
      }


      const result = await Review.create({
        product_id: product_id,
        user_id: user_id,
        rating: rating,
        review_title: review_title,
        review_comment: review_comment,
        review_img: imageUrl
      });

      res.status(201).json({
        message: 'Review and rating added successfully',
        result: result
      });

    })

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};







const getallreview = async (req, res) => {
  try {
    const productid = req.params.productId;
    const reviews = await Review.findAll({
      where: {
        product_id: productid
      },
      include: [
        {
          model: registration,
          attributes: ['name'],

        },
      ]

    })
    // Calculate the total number of reviews
    const totalReviews = reviews.length;
    // Find the user names who have rated the product
    const uniqueUserIds = [...new Set(reviews.map((review) => review.user_id))];
    const numberOfRaters = uniqueUserIds.length;

    // Calculate the total rating by summing up the 'rating' field for all reviews
    let totalRating = 0;
    for (const review of reviews) {
      totalRating += review.rating;
    }
    let Averageproductrating = totalRating / 5

    res.status(201).json({
      message: 'get all review detail by id',
      result: reviews,
      totalReviews: totalReviews,
      totalRating: Averageproductrating,
      numberOfRaters: numberOfRaters
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = {
  AddReviewAndRating,
  getallreview
}