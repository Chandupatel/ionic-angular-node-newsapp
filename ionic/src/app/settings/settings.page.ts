import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { S1Service } from '../s1.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

	constructor(private router: Router,private s1: S1Service,
		private toastctr:ToastController,public toastr: ToastrManager) { 

		var token=localStorage.getItem("token");
		if(token==null)
			{this.router.navigate(['/login']);
		} 

		this.oldemail =localStorage.getItem("username");
		this.s1.profileDetails(this.oldemail).subscribe((res)=>{
			this.name=res[0].name;
			this.email=res[0].email;
			this.gender=res[0].gender;
			this.contact=res[0].contact;
		});
	}


	oldemail;
	name;
	email;
	gender;
	contact;

	Save()
	{
		this.oldemail =localStorage.getItem("username");		
		this.s1.editPro(this.name,this.email,this.oldemail,this.contact).subscribe((res:any)=>{
			//this.saved=res;
			localStorage.setItem("username", this.email);
			this.toastControl(1);
			console.log(res);
		});
	}




	data;
	changebtn()
	{
		this.data=1;
	}




	matching_passwords_group = new FormGroup({
		newpwd: new FormControl('', Validators.compose([
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
		let pass = formGroup.get('newpwd').value;
		let confirmPass = formGroup.get('confirm').value;
		return pass == confirmPass ? null : { areEqual: true }   
	}

	formdata = new FormGroup(
	{
		oldpwd: new FormControl('',Validators.required),
		matching_passwords: this.matching_passwords_group
	} 
	);

	validation_messages = {

		'newpwd': [
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
	submit(data){
		console.log(data);
		console.log(data.matching_passwords.newpwd);
		this.s1.changepwd(data.oldpwd,data.matching_passwords.newpwd,this.email).subscribe((res:any)=>{
			this.toastControl(0);
			console.log(res);
			this.data=0;
			this.formdata.reset();

		},

      error => {
        this.toastControl(2);
       this.formdata.reset();
        // data.pwd=null;
      }
);


	}





	toastControl(x) {
		if(x==1){
			// const toast = await this.toastctr.create({
			// 	message: 'Details Updated!!',
			// 	duration: 2000
			// });
			// await toast.present();
			 this.toastr.successToastr('Details Updated!!', '', {
                toastTimeout: 3000, dismiss:"click",position: "bottom-center"
            });

		}
		else if(x==0){
			// const toast = await this.toastctr.create({
			// 	message: 'Password changed successfully!!',
			// 	duration: 2000
			// });
			// await toast.present();
			 this.toastr.successToastr('Password changed successfully!!', 'Success!', {
                toastTimeout: 3000, dismiss:"click",position: "bottom-center"
            });
		}
		else{
		// 	const toast = await this.toastctr.create({
		// 		message: 'Old password is incorrect!!',
		// 		duration: 2000
		// 	});
		// 	await toast.present();
		// }
	 this.toastr.errorToastr('Old password is incorrect!!', 'Oops!', {
                position: "bottom-center",toastTimeout: 2000, dismiss:"click"
            });
	}
}




	ngOnInit() {
	}

}
