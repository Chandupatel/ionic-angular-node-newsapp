import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  users;
  constructor(private s1: S1Service) {
  	this.s1.users().subscribe((res)=>{
			this.users=res;
			console.log(res);
		});
  }

  ngOnInit() {
  }

}
