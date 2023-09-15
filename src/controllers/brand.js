const Brand = require('../models/Brand');

const Addbrand = async (req, res) => {
    try {
        const { brand_name, brand_type } = req.body

        // if (!brand_name || !brand_type) {
        //     return res.status(400).json({
        //          message: 'Brand name and type are required.' 
        //         });
        //   }

        // Create a new brand record in the database
        const result = await Brand.create({
            brand_name,
            brand_type,
        });
        console.log(JSON.parse(JSON.stringify(result)))
        res.status(201).json({
            msg: 'success post',
            result: result
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

const testing = async (req, res) => {
    res.send({
        message: "hello from diwakar"
    })
}






module.exports = {
    Addbrand,
    testing
}