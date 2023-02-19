var express = require('express');
var bodyParser = require('body-parser');
var {mongoose}= require('../backend/db/db');
var {newsModel}= require('../backend/models/news');
var {tabModel}= require('../backend/models/tabs');
var {userModel}= require('../backend/models/user');
var {saveModel}= require('../backend/models/savenews');
var {activityModel}= require('../backend/models/activity');

const bcrypt=require('bcryptjs');
mongoose.set('useCreateIndex', true);

var app=express();

app.use((req,res,next)=>{
	res.setHeader("Access-Control-Allow-Origin","*");	//root access
	res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-type,Accept");
	res.setHeader("Access-Control-Allow-Methods","POST,GET,DELETE,PUT");
	next();
});
app.use(bodyParser.json());// parse application/json 


app.post('/signup',(req,res)=>{
	console.log(req.body);
	var postData = new userModel(req.body);
	console.log(postData);
	postData.save().then((result)=>{
		res.status(200).send(result);
	}).catch((err)=>{
		res.status(400).send(err)});

});

app.post('/addnews',(req,res)=>{
	// console.log(req.body);
	var postData = new newsModel(req.body);
	// console.log(postData);
	postData.save().then((result)=>{
		res.status(200).send(result);
	}).catch((err)=>{
		res.status(400).send(err)});

});

app.post('/addtab',(req,res)=>{
	console.log(req.body);
	var postData = new tabModel(req.body);
	console.log(postData);
	postData.save().then((result)=>{
		res.status(200).send(result);
	}).catch((err)=>{
		res.status(400).send(err)});

});


app.post('/login',(req,res)=>{
	var body = new userModel(req.body,['email','password']);
	var tokn=req.body['token'];
	console.log("login");
	userModel.login(body.email,body.password).then((user)=>{
		// res.status(200).send("user");
		// res.status(200).json({status: true});
		userModel.updateOne({email:body.email}, {$set: {token:tokn}},(err,result)=>{
			// console.log(tokn);
			console.log(result);
		// res.send(result);
		userModel.find({email: body.email},(err,result)=>{
			console.log(result);

		res.send(result);		
	});
	});

    })
	.catch((err)=>{
		res.status(400).send();
	});

});

app.post('/changeForgot-pwd',(req,res)=>{
	var pwd=req.body['password'];
	var email=req.body['email'];
	console.log(pwd,email);
	bcrypt.genSalt(10,(err,salt)=>{
		bcrypt.hash(pwd,salt,(err,hash)=>{
			pwd=hash;
			console.log(hash);
			userModel.updateOne({email:email}, {$set: {password:pwd}},(err,result)=>{
				console.log(result);
				res.send(result);
			}).catch((err)=>{
				res.status(400).send();
			});
		});
	});
});


app.post('/forgot-pwd',(req,res)=>{
	query=req.body;
	console.log(req.body);
	userModel.find({$and: [ query ]},(err,result)=>{
		// console.log(result);
		res.send(result);		
	});
});


app.post('/save-rating',(req,res)=>{
	var rate=req.body['rate'];
	var email=req.body['email'];
	userModel.updateOne({email:email}, {$set: {ratings:rate}},(err,result)=>{
		console.log(result);
		res.send(result);		
	}).catch((err)=>{
		res.status(400).send();
	});

});


app.post('/edit-profile',(req,res)=>{
	var name=req.body['name'];
	var oldemail=req.body['oldemail'];
	// var gender=req.body['gender'];
	var newemail=req.body['newemail'];
	var contact=req.body['contact'];
	var query={name:name,email:newemail,contact:contact};
	userModel.updateOne({email:oldemail}, {$set: query},(err,result)=>{
		// console.log(result);
		saveModel.updateMany({email:oldemail}, {$set: {email:newemail}},(err,result)=>{
			console.log(result);
		});
		activityModel.updateMany({email:oldemail}, {$set: {email:newemail}},(err,result)=>{
			console.log(result);
		});
		res.send(result);
	}).catch((err)=>{
		res.status(400).send();
	});

});


app.post('/updatestatus',(req,res)=>{
	var status=req.body['status'];
	var email=req.body['email'];
	userModel.updateOne({email:email}, {$set: {status:status}},(err,result)=>{
		console.log(result);
		res.send(result);		
	}).catch((err)=>{
		res.status(400).send();
	});

});

app.post('/change-pwd',(req,res)=>{
	var oldpwd=req.body['oldpwd'];
	var email=req.body['email'];
	var newpwd=req.body['newpwd'];
	console.log(oldpwd,newpwd,email);

	
	userModel.login(email,oldpwd).then((user)=>{
		// res.status(200).send("user");
		res.status(200).json({status: true});
	bcrypt.genSalt(10,(err,salt)=>{
		bcrypt.hash(newpwd,salt,(err,hash)=>{
			newpwd=hash;
			console.log(hash);
			userModel.updateOne({email:email}, {$set: {password:newpwd}},(err,result)=>{
				console.log(result);
			});
		});
	});
res.send(res);
}).catch((err)=>{
		res.status(400).send();
	});
});



app.post('/show-users',(req,res)=>{

	console.log(req.body);
	userModel.find({},(err,result)=>{
		// console.log(result);
		res.send(result);		

	});
});

app.post('/show-tabs',(req,res)=>{
	tabModel.find({},(err,result)=>{
		res.send(result);		
	}).sort({sequence: 1});
});

app.post('/count-users',(req,res)=>{

	userModel.count({},(err,result)=>{
		console.log(result);
		response = {
			status: 'success',
			data: result
		};
		res.send(response);
	});

});


app.post('/show-news',(req,res)=>{
	
	var query=req.body['type'];
	newsModel.find({Type: query},(err,result)=>{
		// console.log(result);
		res.send(result);		
	}).sort({_id: -1});
});

app.post('/top-news',(req,res)=>{
	
	newsModel.find({Priority: "High"},(err,result)=>{
		// console.log(result);
		res.send(result);		
	}).sort({_id: -1});
});

app.post('/news-desc',(req,res)=>{
	
	var query=req.body['id'];
	newsModel.find({_id: query},(err,result)=>{
		// console.log(result);
		res.send(result);		
	});
});

app.post('/update-users',(req,res)=>{
	// console.log("hello");
	var query=req.body['email'];
	console.log(query);
	userModel.find({email: query},(err,result)=>{
		// console.log(result);
		res.send(result);		
	});
});


app.post('/save-news',(req,res)=>{
	// console.log(req.body);
	var postData = new saveModel(req.body);
	// console.log(postData);
	postData.save().then((result)=>{
		res.status(200).send(result)
	}).catch((err)=>{
		res.status(400)});

});


app.post('/show-saved',(req,res)=>{
	var query=req.body['email'];
	var count=0;
	var query1=[];

	saveModel.find({email: query},(err,result)=>{
		count=result.length;
		for(var i=0;i<count;i++){
			query1.push(result[i].newsid);
		}
		// console.log(query1);
		// query1.sort();
		newsModel.find({_id: {$in : query1}},(err,result)=>{
			res.send(result);
		});
	});
});


	app.delete('/delete-news',(req,res)=>{
		var id=req.query['newsid'];
		var email=req.query['email'];
		console.log("deleted"+id,email);	
		
		saveModel.deleteOne({$and: [ { newsid: id }, { email:email } ]},(err,result)=>{
			res.send(result);	
			console.log(result);	
		});



	// saveModel.deleteOne({newsid: id},{email:email},(err,result)=>{
	// 	res.send(result);	
	// 	console.log(result);	
	// });
});


app.post('/activity',(req,res)=>{
	// console.log(req.body);
	var postData = new activityModel(req.body);
	// console.log(postData);
	postData.save().then((result)=>{
		res.status(200).send(result)
	})
	.catch((err)=>{
		res.status(400)});

});


app.post('/show-activity',(req,res)=>{
	var query=req.body['email'];
	var count=0;
	var query1=[];

	activityModel.find({email: query},(err,result)=>{
		count=result.length;
		for(var i=0;i<count;i++){
			query1.push(result[i].newsid);
		}
		// console.log(query1);
		// query1.sort();
		newsModel.find({_id: {$in : query1}},(err,result)=>{
			res.send(result);
		}).sort({_id: -1});
	});
});






port=3000;
app.listen(port,(res)=>{
	console.log("listening on Port");
});