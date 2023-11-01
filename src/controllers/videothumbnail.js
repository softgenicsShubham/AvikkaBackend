const Videothumnail = require('../models/Videothumnail');
const Video = require('../models/Video');
Videothumnail.belongsTo(Video); // Assuming Video is properly defined as a Sequelize model

const multer = require('multer');
const Sequelize = require('sequelize');
const { fn, col, literal } = Sequelize;
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/videothumbnail');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

const addvideothumnail = async (req, res) => {
    console.log('INFO -> videothumbnail INFO API CALLED')

    try {
        // Using upload.single() to handle a single file upload with the field name 'video'
        upload.fields([{ name: 'videothumbnail', maxCount: 10 }])(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: 'Error uploading video', error: err });
            }

            // Extract data from the request

            // Check if a video file was uploaded
            const thumbnailImage = req.files['videothumbnail'][0];
            const thumbnail_url = `uploads/videothumbnail/${thumbnailImage.filename}`;

            // Get the file path of the uploaded video
            // const thumbnail_url = req.file.path;

            // Create a new video record in the database
            const newVideothumbnail = await Videothumnail.create({
                thumbnail_url,
            });

            res.status(201).json({ message: 'Videothumnail added successfully', thumbnail: newVideothumbnail });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error: error });
    }
};


const getvideothumbnail = async (req, res) => {
    console.log('INFO -> getvideo INFO API CALLED');
  
    try {
      const videoThumbnails = await Videothumnail.findAll({
        include: [Video], // Include the associated Video model
      });
  
      res.json({ videoThumbnails });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error', error: error });
    }
  }
module.exports = {
    addvideothumnail,
    getvideothumbnail};
