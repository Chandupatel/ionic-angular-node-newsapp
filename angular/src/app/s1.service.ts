import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class S1Service {

	constructor(private http:HttpClient) { }
	url='http://localhost:3000/';
	//url='http://192.168.43.40:3000/'; 

	addnews(title,desc,img,type,priority)
	{
		return this.http.post(this.url+'addnews',{
			"Title":title, "Description":desc,  "Image":img, "Type":type, "Priority":priority
		});
	}

	addtab(tabname,sequence)
	{
		this.http.post(this.url+'addtab',{
			"name":tabname, "sequence":sequence
		}).subscribe((res)=>{
			console.log(res);
			// console.log(res.name);
		});
	}

	showtab()
	{
		return this.http.post(this.url+'show-tabs',{});
	}

	users()
	{
		return this.http.post(this.url+'show-users',{});
	}

	editPro(name,newemail,contact,oldemail)
	{
		return this.http.post(this.url+'edit-profile',{
			"name":name, "newemail":newemail, "contact":contact,
			"oldemail":oldemail
		});
	}


	count()
	{
		return this.http.post(this.url+'count-users',{});
	}

	updateuser(email)
	{
		console.log("hello"+email);
		return this.http.post(this.url+'update-users',{email});

	}

	updatestatus(email,status)
	{
		return this.http.post(this.url+'updatestatus',{
			"email":email, "status":status
		});
	}


}
