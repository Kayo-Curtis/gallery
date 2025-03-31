const express = require('express');
const router = express.Router();
let Image = require('../models/images');

// GET single image by ID
router.get('/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    res.render('singleImage', { title: 'Single Image', image });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching image');
  }
});

// UPDATE image by ID
router.put('/:id', async (req, res) => {
  try {
    const image = await Image.findOneAndUpdate(
      { _id: req.params.id },
      { name: req.body.name },
      { new: true }
    );
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating image');
  }
});

// DELETE image by ID
router.delete('/:id', async (req, res) => {
  try {
    await Image.deleteOne({ _id: req.params.id });
    res.redirect('/index');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting image');
  }
});

module.exports = router;
