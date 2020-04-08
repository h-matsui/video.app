const express = require('express'),
      multer = require('multer'),
      fs = require('fs'),
      path = require('path'),
      ffmpeg = require('fluent-ffmpeg');

const router = express.Router();

const schot = fs.readdirSync('./nas/picture/');
const mvFs = fs.readdirSync('./nas/movie/');

const upload = multer({ dest: './nas/movie'})

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
            .save('./nas/picture/');
    }
    res.json({ 'result': 'success!' });
});

module.exports = router;