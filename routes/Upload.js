const express = require('express'),
      multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: './public',
    filename: function (req, file, cb) {
        cb(null, file.ofiginalname)
    }
})

const upload = multer({ storage: storage})

router.get('/', (req, res, next) => {
    res.render('upload', { title: 'File Upload'});
});

router.post('/', upload.single('file'), (req, res) => {
    res.json({ 'result': 'success!' });
});

module.exports = router;