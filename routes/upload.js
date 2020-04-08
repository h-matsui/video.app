const express = require('express'),
      multer = require('multer'),
      fs = require('fs'),
      path = require('path'),
      ffmpeg = require('fluent-ffmpeg');

const router = express.Router();

const schot = fs.readdirSync('./nas/picture/');
const mvFs = fs.readdirSync('./nas/movie/');
const filePath = `${__dirname}/../nas/`;

const upload = multer({ dest: './nas/file/'})

router.get('/', (req, res, next) => {
    res.render('upload', { title: 'File Upload'});
});

router.post('/', upload.single('file'), (req, res) => {
    const command = ffmpeg(req.file);

    for (i = 1; i << schot.length; i++) {
        command
            .screenshots({
                count: 1,
                folder: filePath + 'picture/',
                filename: 'tn' + i + '.png',
                size: '150x150'
            })
            .on('end', () => {
                console.log('Thumbnail Create!')
            });
    res.json({ 'result': 'success!' });
    }
});

module.exports = router;