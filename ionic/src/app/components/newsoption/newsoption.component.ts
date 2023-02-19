import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { S1Service } from '../../s1.service';
import { ToastController } from '@ionic/angular';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
	selector: 'app-newsoption',
	templateUrl: './newsoption.component.html',
	styleUrls: ['./newsoption.component.scss'],
})
export class NewsoptionComponent implements OnInit {

	constructor(private popoverController: PopoverController,private s1: S1Service,
		private toastctr:ToastController, public toastr: ToastrManager) { }
	close() {
		this.popoverController.dismiss();
	}

	save()
	{
		var newsid=this.s1.saveid;
		var email=localStorage.getItem("username");
		this.s1.savenews(email,newsid);
		this.popoverController.dismiss();
		this.toastControl();
		// this.toastr.infoToastr('Story Saved', '', {
  //               toastTimeout: 1000, dismiss:"click",position: "bottom-center",animate: "fade"
  //           });
	}

	async toastControl() {

		const toast = await this.toastctr.create({
			message: 'Story Saved!!!',
			duration: 2000
		});
		await toast.present();
		
		
	}
	ngOnInit() {}

}
