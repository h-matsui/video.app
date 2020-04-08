 const express = require('express');
 const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('video', { 
    title: 'All Videos',
    videoPath: '../nas/file/8df83f9855b9b8248063cc161275e14a.mp4'
   });
});

module.exports = router;