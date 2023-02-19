import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  constructor(private s1: S1Service,private parameter: ActivatedRoute,private router: Router) 
  {this.s1.updateuser(this.parameter.snapshot.params.email).subscribe((res)=>{
      this.name=res[0].name;
      this.email=res[0].email;
      this.gender=res[0].gender;
      this.contact=res[0].contact
      this.rating=res[0].ratings;

      console.log(res);
    });

  }
contact;
name;
email;
gender;
rating;
oldemail;

Save()
  {
    this.oldemail =this.parameter.snapshot.params.email;    
    this.s1.editPro(this.name,this.email,this.contact,this.oldemail).subscribe((res:any)=>{
      //this.saved=res;
      // localStorage.setItem("username", this.email);
      alert("Details Updated!!!");
      console.log(res);
      this.router.navigate(['/user']);
    });
  }

  ngOnInit() {
  }

}
