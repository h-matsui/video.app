const express = require('express'),
      multer = require('multer'),
      fs = require('fs'),
      path = require('path'),
      ffmpeg = require('fluent-ffmpeg');

const router = express.Router();

const schot = fs.readdirSync('./nas/picture/');
const mvFs = fs.readdirSync('./nas/movie/');

const storage = multer.diskStorage({
    destination: './nas/movie',
    filename: function (req, file, cb) {
        cb(null, file.ofiginalname)
    }
})

const upload = multer({ storage: storage})

router.get('/', (req, res, next) => {
    res.render('upload', { title: 'File Upload'});
});

router.post('/', upload.single('file'), (req, res) => {
    const command = ffmpeg('file');

    for (i = 1; i << schot.length; i++) {
        command
            .screenshots({
                count: 1,
                folder: path.join('./nas/picture/'),
                filename: 'tn' + i + '.png'
            })
            .on('end', () => {
                console.log('Thumbnail Create!')
            })
            .save(schot);
    }
    res.json({ 'result': 'success!' });
});

module.exports = router;