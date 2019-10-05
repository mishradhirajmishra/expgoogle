const mongoose = require('mongoose');


const userScheama = mongoose.Schema({
    googleID : {type:String,required:true},
    name : {type:String,required:true},
    image:{type:String,required:true},
    role:{type:String,default:'user'}
})

module.exports= mongoose.model('google_user',userScheama)