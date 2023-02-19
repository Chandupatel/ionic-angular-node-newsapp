import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class S1Service {
	searchCtr=false;

	constructor(private http:HttpClient,private router: Router) { }
	
	// url='http://localhost:3000/';
	url='http://192.168.43.201:3000/'; 


	signup(name,gender,contact,email,password,ques,ans,token)
	{
		return this.http.post(this.url+'signup',{
			"name":name, "gender":gender,  "contact":contact, "email":email, "password":password, 
			"question":ques, "answer":ans, "token":token
		});
	}
	// login(email,password)
	status;
	login(email,password,token)
	{
		return this.http.post(this.url+'login',{
			"email":email, "password":password, "token":token
		});		
	}
	profileDetails(email)
	{
		return this.http.post(this.url+'update-users',{
			"email":email
		});
	}
	editPro(name,newemail,oldemail,contact)
	{
		return this.http.post(this.url+'edit-profile',{
			"name":name, "newemail":newemail,
			"oldemail":oldemail, "contact":contact
		});
	}
	changepwd(oldpwd,newpwd,email)
	{
		return this.http.post(this.url+'change-pwd',{
			"oldpwd":oldpwd, "email":email, "newpwd":newpwd
		});
	}
	forgotpwd(email,ques,ans)
	{
		return this.http.post(this.url+'forgot-pwd',{
			"email":email, "question": ques, "answer":ans
		});	
	}
	changeForgtpwd(pwd,email)
	{
		return this.http.post(this.url+'changeForgot-pwd',{
			"password":pwd, "email":email
		});
	}
	ratings(rate,email)
	{
		return this.http.post(this.url+'save-rating',{"rate":rate, "email":email});	
	}
	news(type)
	{
		return this.http.post(this.url+'show-news',{type});
	}
	newsDesc(id)
	{
		return this.http.post(this.url+'news-desc',{id});	
	}
	topnews()
	{
		return this.http.post(this.url+'top-news',{});
	}

	showtab()
	{
		return this.http.post(this.url+'show-tabs',{});
	}

	// savednews;
	saveid;
	savenews(email,newsid)
	{
		console.log(newsid,email);
		this.http.post(this.url+'save-news',{
			"email":email, "newsid":newsid
		}).subscribe((res)=>{
			console.log(res);
			// console.log(res.name);
		});
	}

	showsaved(email)
	{
		console.log(email);
		return this.http.post(this.url+'show-saved',{email});
	}

	deletenews(email,newsid)
	{
		this.http.delete(this.url+'delete-news?email='+email+'&newsid='+newsid)
		.subscribe((res) => console.log(res)); //query String
	}

activity(email,newsid,date)
	{
		console.log("actiity");
		this.http.post(this.url+'activity',{
			"email":email, "newsid":newsid, "date":date
		}).subscribe((res)=>{
			console.log(res);
			// console.log(res.name);
		});
	}

	showactivity(email)
	{
		console.log("showactivity");
		return this.http.post(this.url+'show-activity',{email});
	}





}
