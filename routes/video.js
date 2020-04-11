 const express = require('express');
 const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('video', { 
    title: 'All Videos',
    videoPath: './nas/file/183140076bd8ffff62d748baf80b7670'
   });
});

module.exports = router;