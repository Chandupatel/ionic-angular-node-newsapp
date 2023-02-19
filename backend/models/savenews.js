const mongoose=require('mongoose');
const _=require('lodash');

var save=mongoose.Schema
({
	email:{type:String, unique: false},
	newsid:{type:String, unique: false},
});
save.index({ email: 1, newsid: 1 }, { unique: true });
var saveModel=mongoose.model('saveModel',save);			//reg is a schema name
module.exports={saveModel}


