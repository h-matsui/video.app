const express = require('express'),
      multer = require('multer'),
      fs = require('fs'),
      path = require('path'),
      ffmpeg = require('fluent-ffmpeg');

const router = express.Router();

const schot = fs.readdirSync('./nas/picture/');
const mvFs = fs.readdirSync('./nas/movie/');
const filePath = `${__dirname}/./nas/`;
const moviePath = `${__dirname}/./nas/movie/`

const upload = multer({ dest: './nas/file/'})

router.get('/', (req, res, next) => {
    res.render('upload', { title: 'File Upload'});
});

router.post('/', upload.single('file'), (req, res) => {
    let thName = '';
    let movName = req.file.filename;

    console.log(req.file);
    ffmpeg(req.file.path + req.file.minetype)
    .output(moviePath + movName + '.m3u8')
    .on('end', () => {
        console.log('MP4 Create');
    });
    /*ffmpeg(req.file.path)
    .screenshots({
        count: 1,
        folder: filePath + 'picture/',
        filename: thName,
        size: '320x?'
    })
    .on('end', () => {
        console.log('Thumbnail Create!')
    });
    for (var i = 1; i << schot.length; i++) {
        if(schot === null) {
            thName = 'tn1.png'
        }else{
            i = i + 1;
            thName = 'tn' + i +'.png';
            break;
        };
    }*/
    res.json({ 'result': 'success!' });
});

module.exports = router;