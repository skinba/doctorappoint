import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TokenInterceptorService } from 'src/app/functions/services/http-interceptor.service';
import { AppointmentService } from 'src/app/functions/services/appointment.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  addUserLogin : any = {};
  errormsg : any;
  validMobileno : any;

  constructor(private tokeninterceptorservice : TokenInterceptorService,
    private appointmentservice: AppointmentService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }

  login(){
    
    
    this.appointmentservice.createLoger(this.addUserLogin).subscribe(

      res =>{
        console.log(res);
        this.addUserLogin = res;
        console.log(res.user.name)
        localStorage.setItem("token",res.token);
        localStorage.setItem("name",res.user.name);
        this.router.navigate(["/appointment"])
      
      },
      err =>{
        console.log(err);
        if(err.statusText === 'Bad Request')
        {
          console.log("Invalid Mobile number or Password!");
          this.errormsg = "Invalid Mobile number or Password!"
        }

      })
  }

  
  
 
  

  // onSubmit(){
  //   this.httpinterceptorservice.intercept().subscribe(data => {
  //     console.log;
  //     localStorage.setItem('token',data.token)
  //   })
  // }

}
