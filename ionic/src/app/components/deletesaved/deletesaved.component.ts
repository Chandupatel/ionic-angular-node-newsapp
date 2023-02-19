import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { S1Service } from '../../s1.service';
import { ToastController } from '@ionic/angular';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-deletesaved',
  templateUrl: './deletesaved.component.html',
  styleUrls: ['./deletesaved.component.scss'],
})
export class DeletesavedComponent implements OnInit {

 constructor(private popoverController: PopoverController,private s1: S1Service,
 	private toastctr:ToastController,public toastr: ToastrManager) { }
  close() {
		this.popoverController.dismiss();
	}
  remove()
	{
		var newsid=this.s1.saveid;
		var email=localStorage.getItem("username");
		console.log(newsid);
		this.s1.deletenews(email,newsid);
		this.popoverController.dismiss();
// location.reload();
		    
   //  this.s1.showsaved(email).subscribe((res)=>{
			// 	this.s1.savednews=res;
			// 	console.log(this.s1.savednews);
			// });
		// this.toastControl();
this.toastr.infoToastr('Story Removed.. Pull to refresh', '', {
                toastTimeout: 3000, dismiss:"click",position: "bottom-center"
            });

	}
async toastControl() {

		const toast = await this.toastctr.create({
			message: 'Story Removed!!!',
			duration: 2000
		});
		await toast.present();
		
		
	}
  ngOnInit() {}

}
