import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AppointmentService } from "src/app/functions/services/appointment.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.scss"]
})
export class AppointmentComponent implements OnInit {

  addUserArray: any = [];
  addAllUserArray: any = [];
  id: any;
  getToken: any;
  tokenno: any;
  deleteUserUpdate: any = {};
  updateUser: any = {};
  deletedArray: any = []

  constructor(
    private spinner: NgxSpinnerService,
    private appointmentService: AppointmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getUser();
  }

  getUser() {
    this.appointmentService.getAppointment().subscribe(data => {
      let j = 0;
      this.addAllUserArray = data;
      console.log(this.addAllUserArray);
      for (let i = 0; i < this.addAllUserArray.length; i++) 
      {
        if (this.addAllUserArray[i].status == "Created") 
        {
          this.addUserArray[j] = this.addAllUserArray[i];
          j++;
        }
      }
      console.log(this.addUserArray);
      setTimeout(() => {
        this.spinner.hide();
      }, 1500);
    });
  }

  
  // getOneUser() {
  //   this.appointmentService.getOneAppointment(this.id).subscribe(data => {
  //     this.addUserArray = data;
  //     console.log(this.addUserArray);
  //   });
  // }
  getId(id) {
    this.id = id;
    console.log(this.id);
  }

  deleteUser() {
    //   this.deleteUserUpdate.status = "Deleted";
    //   console.log(this.id);
    //   this.appointmentService.deleteAppointment(this.id).subscribe(data => {
    //     console.log(data);
    //     this.getUser();
    //   });
    
    this.deleteUserUpdate.status = "Deleted";
    console.log(this.id);
    this.appointmentService
      .updatAppointment(this.id, this.deleteUserUpdate)
      .subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/dummy', { skipLocationChange: true });
        setTimeout(() => this.router.navigate(['/appointment']), 0);
     });
     
  }

  addUpdateUser() {
    this.updateUser.status = "Updated";
    console.log(this.id);
    this.appointmentService
      .updatAppointment(this.id, this.updateUser)
      .subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/dummy', { skipLocationChange: true });
        setTimeout(() => this.router.navigate(['/appointment']), 0);    
       });
      
  }

  

  
}
