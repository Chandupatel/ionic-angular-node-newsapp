import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  constructor(private s1: S1Service) { 
    this.s1.showtab().subscribe((res)=>{
      this.tabs=res;
      this.formdata.reset();
      
      // this.type=null;
      // this.formdata.controls['type'].setValue(null);
      // this.formdata.patchValue({type: null});
      console.log(res);
    });

  }


formdata = new FormGroup(
  {

    title: new FormControl('',Validators.required),
    desc: new FormControl('',Validators.required),
    img: new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
    priority: new FormControl('',Validators.required),

 
  } 
  );

  validation_messages = {


    'title': [
    { type: 'required', message: 'Title is required.' }
    ],

      'desc': [
    { type: 'required', message: 'Description is required.' }
    ],

        'img': [
    { type: 'required', message: 'Image is required.' }
    ],

        'type': [
    { type: 'required', message: 'Type is required.' }
    ],

        'priority': [
    { type: 'required', message: 'priority is required.' }
    ],
  }


tabs;

submit(data)
{
	this.s1.addnews(data.title,data.desc,data.img,data.type,data.priority).subscribe((res)=>{
      console.log(res);
      // this.title="";
      // this.desc="";
      // this.img="";
      // this.type=null;
      // this.priority=null;
      this.formdata.reset();
      alert("News Submitted Successfully!!");
      // console.log(res.name);
  });
}


  ngOnInit() {
  }

}
