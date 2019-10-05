const express = require('express');
const router = express.Router();
const cont = require('../controller/auth-controller');
var passport = require('passport');
/* GET users listing. */
router.get('/google',passport.authenticate('google',{scope: ['profile']}), cont.Google);
router.get('/logout', cont.LogOut);
router.get('/google/redirect/',passport.authenticate('google'), cont.GoogleRedirect);
module.exports = router;
