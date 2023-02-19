var mongoose=require('mongoose');
//mongoose.promise=require('bluebird');

mongoose.connect('mongodb://localhost:27017/newsapp');
module.exports={mongoose}