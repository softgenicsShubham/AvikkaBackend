const cetegories = require('../models/Categories')
const Products = require('../models/products')
const item = require('../models/item')
const review = require('../models/Review')
const subCategories = require('../models/Subcategories')
const Carousel = require('../models/carousel')
const Sequelize = require('sequelize')
const { fn, col, literal } = Sequelize;
Products.hasMany(review, { foreignKey: 'product_id' }); // Define the association



const postCategories = async (req, res) => {
    const categories_name = req.body.categories_name;
    // const categories_id = req.body.categories_id;
    console.log(categories_name)
    // console.log(categories_id)

    try {
        // Check if all required fields are provided
        if (!categories_name) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new carousel banner
        const data = await cetegories.create({
            categories_name,
            // categories_id,
        });

        // Respond with the created banner
        res.status(200).send(data);
    } catch (error) {
        console.error('Error creating cetogiries table:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getCategories = async (req, res) => {
    const data = await cetegories.findAll();
    try {
        if (!data) {
            return res.status(404).json({ error: 'cetegories not found' });
        }
        res.status(200).send(data);
    } catch (error) {
        console.error('Error get cetogiries table:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const editCategories = async (req, res) => {
    const cetegoriesId = req.params.id;
    const { categories_name, categories_id } = req.body;
    console.log(cetegoriesId)
    console.log(categories_name)
    console.log(categories_id)

    try {
        const data = cetegories.findByPk(cetegoriesId);
        if (!data) {
            return res.status(404).json({ error: 'categories not found' });
        }
        // Update the banner's properties
        await cetegories.update({
            categories_name,
            categories_id,
        }, {
            where: {
               categories_id: cetegoriesId,
            },
        }
        );
        const updatedData = await cetegories.findByPk(cetegoriesId);
        res.status(200).json({ categories: updatedData, message: 'categories updated successfully' });
    } catch (error) {
        console.error('Error edit cetogiries table:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteCategories = async (req, res) => {
    const cetegoriesId = req.params.id;
    try {
        // Find the banner by its ID and delete it
        const deletedCategories = await cetegories.destroy({ where: { categories_id: cetegoriesId } });

        if (!deletedCategories) {
            return res.status(404).json({ error: 'Categories not found' });
        }

        // Respond with a success message
        res.status(200).send({ id: cetegoriesId, message: 'Categories deleted successfully' });
    } catch (error) {
        console.error('Error deleting Categories by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}




// get categories item
const getcategoriesitem = async (req, res) => {
    try {
        const categoriesitem = req.params.categoriesitem;
        // Find the brand based on the brand name
        const cat_item = await item.findOne({
            where: {
                item_name: categoriesitem,
            },
        });
        //  let abc=cat_item.item_name.toLowerCase()
        // console.log(cat_item, 'categoriesitem')



        if (!cat_item) {
            return res.status(404).json({ message: 'categories item  not found' });
        }
        // console.log(abc,"abc")
        // // Find all products associated with the categories item



        let resultcat = await subCategories.findOne({
            where: {
                subCategories_name: cat_item.subCetegories_name
            }
        })
        // resultcat = JSON.parse(JSON.stringify(resultcat))

        // let newvalue = resultcat.categories_name

        // // console.log(resultcat)



        // const data = JSON.parse(JSON.stringify(newvalue.toLowerCase()));
       


        const carouseldata = await Carousel.findAll({
            where: {
                product_categories: resultcat.categories_name
                .trim()
            }
        });






        // console.log(JSON.parse(JSON.stringify(carouseldata)), 'resultcatresultcat')
        const products = await Products.findAll({
            where: {
                product_categories: cat_item.item_name
            },
            include: [
                {
                    model: review, // Assuming you have a relationship between Products and Review
                },
            ],

        });
        //     if (!products || products.length === 0) {
        //         return res.status(404).json({ message: 'No products found for this categories item' });
        //       }

        //       // Assuming there is a product_id property in the first product in the list
        //       const product_id = products[0].product_id;

        //       // Find the review for the product
        //       const reviewresult = await review.findAll({
        //         where: {
        //           product_id: product_id,
        //         },
        //       });
        //       const totalReviews = reviewresult.length;
        // // Find the user names who have rated the product
        // const uniqueUserIds = [...new Set(reviewresult.map((review) => review.user_id))];
        // const numberOfRaters = uniqueUserIds.length;

        // // Calculate the total rating by summing up the 'rating' field for all reviews
        // let totalRating = 0;
        // for (const review of reviewresult) {
        //   totalRating += review.rating;
        // }
        // let Averageproductrating = totalRating / totalReviews

        //       const productreviewData = {
        //         products: products,
        //         review: reviewresult,
        //         totalReviews: totalReviews,
        //         totalRating: Averageproductrating,
        //         numberOfRaters: numberOfRaters,

        //       };
        //   console.log(products,'productsproducts')
        res.json({products,carouseldata});

        //   console.log(productreviewData, 'mergedData');

    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }


}

const getcategoriesById=async(req,res)=>{

    const cetegoriesId = req.params.id;
    try {
        // Find the banner by its ID and delete it
        let resultcat = await cetegories.findOne({
            where: {
                categories_id:cetegoriesId
            }
        })

        res.status(200).send({ data:resultcat, message: 'Categories deleted successfully' });
    } catch (error) {
        console.error('Error deleting Categories by ID:', error);
        }
}


module.exports = { postCategories, getCategories, editCategories, deleteCategories, getcategoriesitem,getcategoriesById }

