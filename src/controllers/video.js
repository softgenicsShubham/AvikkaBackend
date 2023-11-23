const Video = require('../models/Video');
const ffmpeg=require('fluent-ffmpeg')
const multer = require('multer');
const Sequelize = require('sequelize');
const { fn, col, literal } = Sequelize;
const path = require('path');
// const { exec } = require('child_process');
// const ffmpeg = require('fluent-ffmpeg');

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
    const uniqueID = Date.now();
    try {
        // Using upload.single() to handle a single file upload with the field name 'video'
        upload.single('video')(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: 'Error uploading video', error: err });
            }

            // Check if a video file was uploaded
            const videofile = req.file;
            const inputVideoPath = path.join(__dirname, '../../public/uploads/video', videofile.filename);
            const outputVideoPath = path.join(__dirname, `../../public/uploads/video/output_${uniqueID}.mp4`);
            const videoURL = `/uploads/video/output_${uniqueID}.mp4`;
            const targetAspectRatio = 16 / 9; // 16:9 aspect ratio
            const targetWidth = 1280; // Desired width
            const targetHeight = Math.round(targetWidth / targetAspectRatio);
            
            ffmpeg(inputVideoPath)
                .videoCodec('libx264') // Video codec
                .audioCodec('aac') // Audio codec
                .audioChannels(2) // Audio channels (stereo)
                .audioBitrate('192k') // Audio bitrate
                .videoBitrate('1000k') // Video bitrate
                .size(`${targetWidth}x${targetHeight}`) // Set the size based on calculated width and height
                .aspect('16:9') // Set the aspect ratio to 16:9

                .output(outputVideoPath)
                .on('end', () => {
                    console.log('Video encoding complete');

                    // Assuming you want to save video metadata to the database
                    const { title, description, video_type, like, shared, Videothumnail_id } = req.body;
                    Video.create({
                        title,
                        description,
                        video_type,
                        like: like || 0,
                        shared: shared || 0,
                        video_url: videoURL,
                        Videothumnail_id: Videothumnail_id
                    })
                    .then(newVideo => {
                        res.status(201).json({ message: 'Video added successfully', video: newVideo });
                    })
                    .catch(dbError => {
                        console.error('Error saving video metadata to the database:', dbError);
                        res.status(500).json({ message: 'Error saving video metadata to the database', error: dbError });
                    });
                })
                .on('error', (err) => {
                    console.error('Error encoding video:', err);
                    res.status(500).json({ message: 'Error encoding video', error: err });
                })
                .run();
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
