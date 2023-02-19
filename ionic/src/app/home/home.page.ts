import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { S1Service } from '../s1.service';
import { OptionsComponent } from '../components/options/options.component';
import { NewsoptionComponent } from '../components/newsoption/newsoption.component';
import { Router } from '@angular/router';
// import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  data=this.s1.searchCtr;
  constructor(public popoverController: PopoverController,private s1: S1Service,
    private router: Router) {
  }

  async optionsPopover(ev: any,id) {

    const popover = await this.popoverController.create({
      component: OptionsComponent,
      event: ev,
      translucent: true

    });
    return await popover.present();

  }
  searchbar()
  {
    this.s1.searchCtr=false;
  }

  tabs=null;
  // news:any=null;
  // topnews:any=null;
  news :any=null;;
  headline;



  topnewsFn()
  {

    this.s1.topnews().subscribe((res:any)=>{
      if(res.length>0){
        this.headline="Top News";
        this.news=res;
        console.log(res);
      }
      else{
        this.news=null;
      }
    });

  }

  newsFn(type)
  {

    this.s1.news(type).subscribe((res:any)=>{
      if(res.length>0){
        this.headline=type+" News";
        this.news=res;
        console.log(res);
      }
      else{
        this.news=null;
      }
    });

  }


  desc(id)
  {
    var date = new Date;
    // var date = d.toISOString().slice(0,10);
    var email=localStorage.getItem("username");
    console.log(date);
    this.s1.activity(email,id,date);
    this.router.navigate(['newsdescr/'+id]);
  }


  ngDoCheck()
  {
    this.data=this.s1.searchCtr;
  }
  async newsPopover(ev: any,id) {
    const popover = await this.popoverController.create({
      component: NewsoptionComponent,
      event: ev,
      translucent: true
    });
    this.s1.saveid=id;
    console.log(id);
    return await popover.present();
  }


  ionViewWillEnter()
  {
    var token=localStorage.getItem("token");
      this.tabs=null;
    // console.log(token);
    if(token)
    {
      this.s1.showtab().subscribe((res)=>{
        this.tabs=res;
        console.log(res);
        this.topnewsFn();
      });

    }
    else
      {this.router.navigate(['/login']);}
  }
}

