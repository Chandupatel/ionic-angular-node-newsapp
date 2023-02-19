import { Component, OnInit } from '@angular/core';
// import { ViewController, NavParams } from 'ionic-angular';
import { PopoverController } from '@ionic/angular';
import { S1Service } from '../../s1.service';

@Component({
	selector: 'app-options',
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

	constructor(private popoverController: PopoverController,private s1: S1Service) { }
	close() {
		this.popoverController.dismiss()
	}
	search() {
		this.s1.searchCtr=true;
		this.popoverController.dismiss()
	}
	
	ngOnInit() {}

}
