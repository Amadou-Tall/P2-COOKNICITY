var express = require('express');
var router = express.Router();
var passport = require('passport');
const userCtrl =require('../controllers/userC');

router.get('/', userCtrl.index);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/recipes',
    failureRedirect : '/recipes'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
