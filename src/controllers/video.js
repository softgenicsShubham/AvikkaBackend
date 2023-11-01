const Video = require('../models/Video');

const multer = require('multer');
const Sequelize = require('sequelize');
const { fn, col, literal } = Sequelize;
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/video');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

const Addvideo = async (req, res) => {
    console.log('INFO -> Addvideo INFO API CALLED')

    try {
        // Using upload.single() to handle a single file upload with the field name 'video'
        upload.single('video')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: 'Error uploading video', error: err });
            }

            // Extract data from the request
            const { title, description, video_type, like, shared ,Videothumnail_id} = req.body;

            // Check if a video file was uploaded
            if (!req.file) {
                return res.status(400).json({ message: 'No video file uploaded' });
            }

            // Get the file path of the uploaded video
            const video_url = req.file.path;

            // Create a new video record in the database
            const newVideo = await Video.create({
                title,
                description,
                video_type,
                like: like || 0,
                shared: shared || 0,
                video_url,
                Videothumnail_id:Videothumnail_id
            });

            res.status(201).json({ message: 'Video added successfully', video: newVideo });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error: error });
    }
};

const getvideo=async(req,res)=>{
    console.log('INFO -> getvideo INFO API CALLED')


    try{
        const videos = await Video.findAll(); 
console.log(videos)
        res.json({ videos });
    
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error: error });

    }
}

const getvideoinfobyVideothumnail_id=async(req,res)=>{
    console.log('INFO -> getvideoinfobyVideothumnail_id INFO API CALLED')
    try{
        const {Videothumnail_id}=req.params
        const allvideo = await Video.findAll({
            where:{
                Videothumnail_id:Videothumnail_id
            }
        }); 
        console.log(allvideo)
        res.json({ allvideo });
    
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error: error });

    }


}
module.exports = {
    Addvideo,
    getvideo,
    getvideoinfobyVideothumnail_id
};
