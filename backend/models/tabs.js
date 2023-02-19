const mongoose=require('mongoose');
const _=require('lodash');

var tabs=mongoose.Schema
({
	name:{type:String},
	sequence:{type:Number}
});
var tabModel=mongoose.model('tabModel',tabs);			//reg is a folder for database
module.exports={tabModel};


