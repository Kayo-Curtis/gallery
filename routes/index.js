const express = require('express');
const router = express.Router();
const uuid = require('uuid');
let upload = require('./upload');
const url = require('url');
let Image = require('../models/images');

var db = [];

// GET home page with image list
router.get('/', async (req, res) => {
  try {
    const images = await Image.find({});
    res.render('index', { images: images, msg: req.query.msg });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST upload image
router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.redirect(`/?msg=${err}`);
    } else {
      if (req.file == undefined) {
        res.redirect('/?msg=Error: No file selected!');
      } else {
        let newImage = new Image({
          name: req.file.filename,
          size: req.file.size,
          path: 'images/' + req.file.filename
        });

        newImage.save();
        res.redirect('/?msg=File uploaded successfully');
      }
    }
  });
});

module.exports = router;
