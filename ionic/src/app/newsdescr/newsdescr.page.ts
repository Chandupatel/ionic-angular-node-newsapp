import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-newsdescr',
  templateUrl: './newsdescr.page.html',
  styleUrls: ['./newsdescr.page.scss'],
})
export class NewsdescrPage implements OnInit {

  constructor(private s1: S1Service,private router: ActivatedRoute) { }

news:any;

newsFn()
  {

    this.s1.newsDesc(this.router.snapshot.params.id).subscribe((res:any)=>{
     
      // this.headline=type+" News";
      this.news=res;
      console.log(res);
    
    
    });

  }



ionViewDidEnter()
{

this.newsFn()
}


  ngOnInit() {
  }

}
