import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { S1Service } from '../s1.service';

@Component({
	selector: 'app-activity',
	templateUrl: './activity.page.html',
	styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

	constructor(private router: Router,private s1: S1Service) { 

		var token=localStorage.getItem("token");
		var email=localStorage.getItem("username");

		console.log(token);
		if(token==null)
			{this.router.navigate(['/login']);} 
		else{
			this.s1.showactivity(email).subscribe((res)=>{
				this.activity=res;
				console.log(this.activity);
			});
		}
	}

	activity;
	desc(id)
	{
		this.router.navigate(['newsdescr/'+id]);
	}


	ngOnInit() {
	}

}
