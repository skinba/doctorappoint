import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { AppointmentService } from './functions/services/appointment.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "appointment-app";
  constructor(private router: Router,private appointmentservice:AppointmentService , private spinner: NgxSpinnerService) {}

  ngOnInit() {}

  
}
