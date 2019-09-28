import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/functions/services/appointment.service';
import {  TokenInterceptorService } from 'src/app/functions/services/http-interceptor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  addUserSignup : any = {};

  constructor(private tokeninterceptorservice : TokenInterceptorService,
    private appointmentservice: AppointmentService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1500);
  }

  signup(){
    this.appointmentservice.createUser(this.addUserSignup).subscribe(data => {
      console.log(data)
      this.addUserSignup = data;
      localStorage.setItem("name",data.name)
      this.router.navigate(["/login"])

    })
  }

}
