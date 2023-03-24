var express = require('express');
var router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res, next) => {
    res.render('home');
    // res.redirect('/rcj');
});
router.get('/home', (req, res, next) => {
    res.render('home');
});

module.exports = router;
