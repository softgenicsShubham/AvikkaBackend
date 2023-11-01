const { Wishlist, Products,Review } = require('../models');

const getWishlistItems = async (req, res) => {
    console.log('INFO -> getWishlistItems INFO API CALLED')

  try {
    const userId = req.userData.user_id; // Adjust this based on your authentication mechanism
    const wishlistItems = await Wishlist.findAll({
      where: { user_id: userId },
      include: [
        {
          model: Products, // Use the Product model here
          include: [
            {
              model: Review, // Include the Review model here
            },
          ],
        },
      ],
    });

    // console.log(wishlistItems,'wishlistItemswishlistItems')
    res.status(200).json({ wishlistItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generated while processing your request', error });
  }
}

const addProductToWishlist = async (req, res) => {
    console.log('INFO -> addProductToWishlist INFO API CALLED')

  try {
    const userId = req.userData.user_id; // Adjust this based on your authentication mechanism
    const { product_id } = req.body;
console.log(req.body,'product_idproduct_id wislist')
    const isWishlistItem = await Wishlist.findOne({
      where: {
        product_id: product_id,
        user_id: userId,
      }
    });

    if (isWishlistItem) {
      return res.status(203).json({ message: 'Already Exist' });
    }

    const wishlistItem = await Wishlist.create({
      user_id: userId,
      product_id: product_id,
    });

    res.status(200).json({ message: 'Product added to the wishlist successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generated while processing your request', error });
  }
};

const removeProductFromWishlist = async (req, res) => {
  try {
    const userId = req.userData.user_id; // Adjust this based on your authentication mechanism
    const product_id = req.params.product_id;
console.log(product_id,'product_id')
    const existingWishlistItem = await Wishlist.findOne({
      where: {
        user_id: userId,
        product_id: product_id,
      },
    });

    if (!existingWishlistItem) {
      return res.status(404).json({ message: 'Product not found in the user\'s wishlist' });
    }

    await existingWishlistItem.destroy();

    res.status(200).json({ message: 'Product removed from the wishlist successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generated while processing your request', error });
  }
};

module.exports = {
  addProductToWishlist,
  getWishlistItems,
  removeProductFromWishlist
};
