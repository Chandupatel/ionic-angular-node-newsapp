const mongoose=require('mongoose');
const _=require('lodash');
const bcrypt=require('bcryptjs');

var user=mongoose.Schema
({

	name:{type:String},
	email:{type:String,unique: true},
	password:{type:String},
	gender:{type:String},
    contact:{type:String},
	ratings:{type:Number},
    question:{type:String},
    answer:{type:String},
    status:{type:String,default: 'Active'},
	token:{type:String}

});


user.pre('save',function(next){
    var user=this;
    if(user.isModified('password')){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(user.password,salt,(err,hash)=>{
                user.password=hash;
                next();
            });
        });
    }else{
        next();
    }      
});


// user.pre('updateOne',function(next){
//     var user=this;
//     if(user.isModified('password')){
//         bcrypt.genSalt(10,(err,salt)=>{
//             bcrypt.hash(user.password,salt,(err,hash)=>{
//                 user.password=hash;
//                 next();
//             });
//         });
//     }else{
//         next();
//     }      
// });


user.statics.login = function(email,password){
    var User = this;
    return User.findOne({email}).then((user)=>{
        if(!user){
            return Promise.reject();
        }
        return new Promise((resolve,reject)=>{
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    resolve(user);
                	console.log("resolve");
                }
                else{
                	console.log("reject");
                    reject();
                }
            });
        });
    })
    .catch((err)=>{
        return Promise.reject();
    });
};



var userModel=mongoose.model('userModel',user);			//reg is a folder for database
module.exports={userModel}


