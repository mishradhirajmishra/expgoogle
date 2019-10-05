const mongoose = require('mongoose');
const key = require('../config/key')

mongoose.Promise=global.Promise;
mongoose.connect(key.mpngoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(()=>{
      console.log('connecyed successfully');
  })
  .catch((err)=>{console.log(err);})