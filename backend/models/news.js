const mongoose=require('mongoose');
const _=require('lodash');

var news=mongoose.Schema
({
	Title:{type:String},
	Description:{type:String},
	Image:{type:String},
	Type:{type:String},
	Priority:{type:String}
});
var newsModel=mongoose.model('newsModel',news);			//reg is a schema name
module.exports={newsModel}


