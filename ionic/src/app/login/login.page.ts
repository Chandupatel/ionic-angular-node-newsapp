import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private s1: S1Service, private fcm: FCM,private router: Router, 
    private toastctr:ToastController,public toastr: ToastrManager) 
  { 
    localStorage.clear(); 
  }



formdata = new FormGroup(
  {
    
    email: new FormControl('',Validators.required),

    pwd: new FormControl('',Validators.required)
    
  } 
  );

  login(data)
  {
    this.fcm.getToken()
    .then(token =>{
      this.s1.login(data.email,data.pwd,token).subscribe((res)=>{
        if(res[0].status=="Active")

        {console.log(res);
                localStorage.setItem("username", data.email);
                localStorage.setItem("token", token);
                console.log("stored in local storage");
                this.router.navigate(['/home']);
                // this.toastControl(1);
                 this.toastr.successToastr('Logged in Successfully', '', {
                toastTimeout: 3000, dismiss:"click",position: "bottom-center"
            });

              }
        else
        {
                this.toastControl1();
          
        }
      },

      error => {
        // this.toastControl(0);
        this.toastr.errorToastr('Please enter valid email and password', 'Oops!', {
                position: "bottom-center",toastTimeout: 2000, dismiss:"click"
            });
      }


      );
      
      console.log(token);
    });
  }

  async toastControl(x) {
    if(x){
      const toast = await this.toastctr.create({
        message: 'Login Successfully !!!',
        duration: 2000
      });
      await toast.present();
    }
    else{
      const toast = await this.toastctr.create({
        message: 'Please enter valid email and password',
        duration: 2000
      });
      await toast.present();
    }
  }
async toastControl1() {

      const toast = await this.toastctr.create({
        message: 'Your account is deactivated !!!',
        duration: 2000
      });
      await toast.present();
   
  }

  ss()
  {
    localStorage.clear();  
  }
  
  ngOnInit() {
  }

}
