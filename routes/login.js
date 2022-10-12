const express = require('express');
const router = express.Router();

router.get('/', function(req, res) { 
    res.render('login')
})

router.post('/', function(req, res) {
    res.redirect('/san-pham')
})

module.exports = router;
