import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;
  constructor(private s1: S1Service, private router: Router) {
  	this.show();
  	console.log("res");
  	
  }
  

  statusFn(email,status)
  {
      if(status=="Active")
      {
        this.s1.updatestatus(email,"Deactive").subscribe((res)=>{
        alert("User Deactivated");
        this.show();
        // console.log(res);
      });
      }

      if(status=="Deactive")
      {
        this.s1.updatestatus(email,"Active").subscribe((res)=>{
        alert("User Activated");
         this.show();
        // console.log(res);
      });
      }
      // console.log(email,status);
      // console.log(this.users);
  }


  show()
  {
    this.s1.users().subscribe((res:any)=>{
      this.users=res;

      for(var i=0; i<res.length;i++)
      {
        if(res[i].status=="Active")
          this.users[i].st="fa fa-thumbs-o-up";
        if(res[i].status=="Deactive")
          this.users[i].st="fa fa-thumbs-down";
      }
      // console.log(res);
      console.log(this.users);

 // this.icon=res.status;
 // console.log(res[0].status);
    });
  }
  ngOnInit() {
  }

}
