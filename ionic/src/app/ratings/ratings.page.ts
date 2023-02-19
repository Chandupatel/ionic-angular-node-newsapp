import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { S1Service } from '../s1.service';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-ratings',
	templateUrl: './ratings.page.html',
	styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit {
	rates;data;
	constructor(private router: Router,private s1: S1Service,
		private alertctr:AlertController) { 
		var token=localStorage.getItem("token");
		// console.log(token);
		if(token==null)
			{this.router.navigate(['/login']);} 

		
	}

	rating;
	
	rate(){
		console.log("stars: "+this.rating);
		var email=localStorage.getItem("username");
		this.s1.ratings(this.rating,email).subscribe((res)=>{
			this.alertControl();

			console.log(res);

		});

		// this.dis=true;
	}

	async alertControl()
	{
		const  alert = await this.alertctr.create({
			header: 'Ratings',
			subHeader: 'Submitted Successfully!!',
			message: this.rating+" Stars",
			buttons: [
			{
				text: 'OK',
				handler: () => {
					console.log('clicked Yes');
					this.router.navigate(['/home']);
					this.rating=null;
				}
			}]
		});
		await alert.present();
	};
	ngOnInit() {
	}
star=[];
ionViewWillEnter() {
		this.data=null;
		var email =localStorage.getItem("username");
		this.s1.profileDetails(email).subscribe((res)=>{
			this.rates=res[0].ratings;
			console.log( "ratings"+res[0].ratings);
			if(res[0].ratings==null)
			{
				this.data=1;
			}
			else
			{
				for(var i=0;i<res[0].ratings;i++)
				{
					this.star.push(i);
				}
			}
		});
	}


}
