import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { S1Service } from '../s1.service';
import { PopoverController } from '@ionic/angular';
import { DeletesavedComponent } from '../components/deletesaved/deletesaved.component';


@Component({
	selector: 'app-saved',
	templateUrl: './saved.page.html',
	styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

	constructor(private router: Router,private s1: S1Service,
		public popoverController: PopoverController) 
	{ 
		var token=localStorage.getItem("token");
		var email=localStorage.getItem("username");

		console.log(token);
		if(token==null)
			{this.router.navigate(['/login']);}
		else{
			this.s1.showsaved(email).subscribe((res)=>{
				this.saved=res;
				// console.log(this.saved);
			});
		}
	}

doRefresh(event) {
    console.log('Begin async operation');
		var email=localStorage.getItem("username");

this.s1.showsaved(email).subscribe((res)=>{
				this.saved=res;
				console.log(this.saved);
			});
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }


	saved;
	desc(id)
	{
		this.router.navigate(['newsdescr/'+id]);
	}

	async newsPopover(ev: any,id) {
		const popover = await this.popoverController.create({
			component: DeletesavedComponent,
			event: ev,
			translucent: true
		});
		this.s1.saveid=id;
		
		// console.log(id);

		return await popover.present();
	}


	ngOnChanges()
	{
		// this.saved=this.s1.savednews;
	}
	ngOnInit() {
	}

}
