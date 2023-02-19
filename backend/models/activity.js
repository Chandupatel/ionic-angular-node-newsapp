const mongoose=require('mongoose');
const _=require('lodash');

var activity=mongoose.Schema
({
	email:{type:String, unique: false},
	newsid:{type:String, unique: false},
	date:{type:Date}
});
activity.index({ email: 1, newsid: 1 }, { unique: true });
var activityModel=mongoose.model('activityModel',activity);			//reg is a schema name
module.exports={activityModel}


