import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-addtab',
  templateUrl: './addtab.component.html',
  styleUrls: ['./addtab.component.css']
})
export class AddtabComponent implements OnInit {

  constructor(private s1: S1Service) {
   this.tabsFn();
  }

  tabname;
  sequence;
  tabs;
  submit()
  {
  	this.s1.addtab(this.tabname,this.sequence);
    this.tabname="";
    this.sequence="";
    this.tabsFn();
    alert("Tab Added!");

  }

tabsFn()
{
    // console.log("res");
    this.s1.showtab().subscribe((res)=>{
      this.tabs=res;
      // console.log(res);
    });
}

  ngOnInit() {
  }

}
