import multer from 'multer';
import express from "express";

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Endpoint for uploading multiple images
uploadRouter.post('/', upload.array('photos', 10), (req, res) => {
    const imageUrls = req.files.map(file => `/${file.path}`);
    try {
        return res.status(201).json({ msg: 'Images uploaded!', imageUrls });
    } catch (error) {
        return res.status(500).json(error);
    }
});

export default uploadRouter;
