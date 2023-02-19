import { Component, OnInit, ViewChild } from '@angular/core';
import { S1Service } from '../s1.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	constructor(private s1: S1Service,private router: Router,	private fcm: FCM,
		private toastctr:ToastController,public toastr: ToastrManager) { }


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

		name: new FormControl('', 
			Validators.compose([
				Validators.pattern('[a-zA-Z ]*'), 
				Validators.required
				])
			),

		gender: new FormControl('',Validators.required),



		email: new FormControl("",
			Validators.compose([
				Validators.required,
				// Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
				Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
				
				])
			),

		contact: new FormControl('', Validators.compose([
			Validators.minLength(4),
			Validators.required
			// Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
			])
		),


		matching_passwords: this.matching_passwords_group,
		ques: new FormControl('',Validators.required),
		ans: new FormControl('',Validators.required)
	} 
	);

	validation_messages = {
		'name': [
		{ type: 'required', message: 'Name is required.' },
		{ type: 'pattern', message: 'Your name must contain only letters.' }

		],

		'gender': [
		{ type: 'required', message: 'Gender is required.' }
		],

		'email': [
		{ type: 'required', message: 'Email is required.' },
		{ type: 'pattern', message: 'Please enter a valid email' }
		],

		'contact': [
		{ type: 'required', message: 'Contact is required.' },
		{ type: 'minlength', message: 'Contact must be 10 digits.' }
		// { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
		],

		'pwd': [
		{ type: 'required', message: 'Password is required.' },
		{ type: 'minlength', message: 'Password must be at least 4 characters long.' }
		// { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
		],

		'confirm':[
		{ type: 'required', message: 'Confirm Password is required.' }
		],

		'matching_passwords': [
		{ type: 'areEqual', message: 'Password mismatch.' }
		],

		'ques': [
		{ type: 'required', message: 'Select a Security Question.' }
		],

		'ans': [
		{ type: 'required', message: 'Answer is required.' }
		]

	}
	submit(data){
		console.log(data);
		console.log(data.matching_passwords.pwd);
		this.fcm.getToken()
		.then(token =>{
			this.s1.signup(data.name,data.gender,data.contact,data.email,data.matching_passwords.pwd,data.ques,
				data.ans,token)
			.subscribe((res)=>{
				localStorage.setItem("username", data.email);
				localStorage.setItem("token", token);
				console.log("stored in local storage");
				this.router.navigate(['/home']);
				this.toastControl(1);
				console.log(res);
			},

      error => {
        this.toastControl(0);
      });
			// console.log(res.name);
		});

	}


toastControl(x) {

if(x){
		// const toast = await this.toastctr.create({
		// 	message: 'Signed up Successfully!!!',
		// 	duration: 2000
		// });
		// await toast.present();
 this.toastr.successToastr('Signed up Successfully!!!', '', {
                toastTimeout: 2000, dismiss:"click",position: "bottom-center"
            });
}
else
{
	// const toast = await this.toastctr.create({
	// 		message: 'Email already exists!!!',
	// 		duration: 2000
	// 	});
	// 	await toast.present();
	 this.toastr.errorToastr('Email already exists!!!', 'Oops!', {
                position: "bottom-center",toastTimeout: 3000, dismiss:"click"
            });
      }



	}

	ngOnInit() {



	}

}
