var mongoose = require('mongoose');

var GallerySchema = new mongoose.Schema({
    key: Number,
    like: Number,
    seen: Number,
    comments: [Object]
});

var Gallery = mongoose.model('Gallery', GallerySchema);

module.exports = Gallery;