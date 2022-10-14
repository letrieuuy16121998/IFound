const express = require('express');
const router = express.Router();

const userController = require('../components/controllers/UserController');

router.get('/', function(req, res) { 
    res.render('login')
})

router.post('/', async function(req, res) {
    const { email, password } = req.body;
    const user = await userController.login(email, password);
    if(user) {
        res.redirect('/products');
    }else {
        res.redirect('/');
    }
})

module.exports = router;
