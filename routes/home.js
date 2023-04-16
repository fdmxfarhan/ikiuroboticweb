var express = require('express');
var router = express.Router();
var Gallery = require('../models/Gallery');

const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res, next) => {
    res.render('home');
    // res.redirect('/rcj');
});
router.get('/publication', (req, res, next) => {
    res.render('publication');
    // res.redirect('/rcj');
});
router.get('/gallery', (req, res, next) => {
    Gallery.findOne({key: 1}, (err, gallery) => {
        if(gallery){
            var seen = gallery.seen+1;
            Gallery.updateMany({}, {$set: {seen: seen}}, (err) =>{
                console.log('seen');
            });
        }else{
            var newGallery = new Gallery({key: 1, like: 0, seen: 1, comments: []});
            newGallery.save();
        }
    });
    Gallery.find({}, (err, galleries) => {
        res.render('gallery', {galleries});
    });
});
router.get('/home', (req, res, next) => {
    res.render('home');
});

module.exports = router;
