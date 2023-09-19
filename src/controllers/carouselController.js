const carousel = require('../models/carousel')

const banner = async (req, res) => {
    const imageUrl = `uploads/banner/${req.file.filename}`;

    const product_categories = req.body.product_categories;
    const brand_name = req.body.brand_name;
    const place = req.body.place;
    const image_url = imageUrl
    try {
        // Check if all required fields are provided
        if (!product_categories || !brand_name || !place || !image_url) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new carousel banner
        const data = await carousel.create({
            product_categories,
            brand_name,
            place,
            image_url,
        });

        // Respond with the created banner
        res.status(200).send(data);
    } catch (error) {
        console.error('Error creating carousel banner:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const getAllData = async (req, res) => {
    try {
        // Find the banner by its ID
        const data = await carousel.findAll();

        if (!data) {
            return res.status(404).json({ error: 'Banner not found' });
        }

        // Respond with the found banner
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching carousel banner by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getbyId = async (req, res) => {
    const bannerId = req.params.id;
    try {
        // Find the banner by its ID
        const data = await carousel.findOne({ where: { id: bannerId } });

        if (!data) {
            return res.status(404).json({ error: 'Banner not found' });
        }

        // Respond with the found banner
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching carousel banner by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteBannerById = async (req, res) => {
    const bannerId = req.params.id;

    try {
        // Find the banner by its ID and delete it
        const deletedBanner = await carousel.destroy({ where: { id: bannerId } });

        if (!deletedBanner) {
            return res.status(404).json({ error: 'Banner not found' });
        }

        // Respond with a success message
        res.status(200).send({ id: bannerId, message: 'Banner deleted successfully' });
    } catch (error) {
        console.error('Error deleting carousel banner by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const editBannerById = async (req, res) => {
    const bannerId = req.params.id;
    const { product_categories, brand_name, place, image_url } = req.body;

    try {
        // Find the banner by its ID
        const banner = await carousel.findByPk(bannerId);

        if (!banner) {
            return res.status(404).json({ error: 'Banner not found' });
        }
        // Update the banner's properties
        await banner.update({
            product_categories,
            brand_name,
            place,
            image_url,
        }, {
            where: {
                id: bannerId,
            },
        }
        );

        // Respond with the updated banner
        res.status(200).json({ updatedBanner: banner, message: 'Banner updated successfully' });
    } catch (error) {
        console.error('Error editing carousel banner by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { banner, getAllData, getbyId, deleteBannerById, editBannerById }
