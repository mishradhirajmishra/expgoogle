const express = require('express');
const router = express.Router();
const cont = require('../controller/index-controller');
/* GET home page. */
const authcheck = (req,res,next)=>{
    if(!req.user){
        res.redirect('/')
    }
    else{next();}
}
router.get('/', cont.Home);
router.get('/dashboard',authcheck, cont.Dashboard);
module.exports = router;
