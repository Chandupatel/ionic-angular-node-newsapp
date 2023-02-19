import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
	selector: 'app-forgotpwd',
	templateUrl: './forgotpwd.page.html',
	styleUrls: ['./forgotpwd.page.scss'],
})
export class ForgotpwdPage implements OnInit {

	constructor(private s1: S1Service,private toastctr:ToastController,
		private router: Router) { this.data=null}
	
	matching_passwords_group = new FormGroup({
		pwd: new FormControl('', Validators.compose([
			Validators.minLength(4),
			Validators.required,
			// Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
			])
		),

		confirm: new FormControl('', Validators.required)
	}, 
	(formGroup: FormGroup) => {
		return this.areEqual(formGroup);
	});

	areEqual(formGroup: FormGroup) {
		let pass = formGroup.get('pwd').value;
		let confirmPass = formGroup.get('confirm').value;
		return pass == confirmPass ? null : { areEqual: true }   
	}




	formdata = new FormGroup(
	{
		
		email: new FormControl('',Validators.required),
		ques: new FormControl('',Validators.required),
		ans: new FormControl('',Validators.required)
		
	} 
	);


formdata1 = new FormGroup(
	{
		
		matching_passwords: this.matching_passwords_group
	} 
	);
	validation_messages = {

		'email': [
		{ type: 'required', message: 'Email is required.' }
		],

		'ques': [
		{ type: 'required', message: 'Select a Security Question.' }
		],

		'ans': [
		{ type: 'required', message: 'Answer is required.' }
		],


		'pwd': [
		{ type: 'required', message: 'Password is required.' },
		{ type: 'minlength', message: 'Password must be at least 4 characters long.' },
		// { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
		],

		'confirm':[
		{ type: 'required', message: 'Confirm Password is required.' }
		],

		'matching_passwords': [
		{ type: 'areEqual', message: 'Password mismatch.' }
		]


	}


	email;

	data;
	continue(data)
	{
		this.email=data.email;
		this.s1.forgotpwd(data.email,data.ques,data.ans).subscribe((res:any)=>{
			// this.saved=res;
			console.log(res);
			if(res.length==0)
			{

				this.toastControl(0);
				console.log("details does not match");
			}
			else
				this.data=1;
			this.formdata.reset();

		});
	}


	submit(data)
	{
		this.s1.changeForgtpwd(data.matching_passwords.pwd,this.email).subscribe((res:any)=>{
			//this.saved=res;
			this.toastControl(1);
			console.log(res);

			this.formdata.reset();			
			this.router.navigate(['/login']);

		});

	}

	async toastControl(x) {
		if(x){
			const toast = await this.toastctr.create({
				message: 'Password changed successfully!',
				duration: 2000

			});
			await toast.present();

		}
		else{
			const toast = await this.toastctr.create({
				message: 'Details does not match!',
				duration: 2000

			});
			await toast.present();

		}
		
		
		
	}

	ionViewWillEnter() {
		this.data=null;
	}
	ngOnInit() {
	}

}
