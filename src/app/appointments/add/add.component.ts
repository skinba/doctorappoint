import { Component, OnInit } from "@angular/core";
import { AppointmentService } from "src/app/functions/services/appointment.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  public addUserData: any = {};
  addAllUserArray = [];
  id: any;
  tokenId: any;
  tokenno: any;
  tokenArray: any = [];
  getToken: any;
  tokenData: any = {};
  first: any = [];
  token: any;
  time: any;
  timeArray: any = [];
  minutes: any;
  timing: any;
  hours: any;
  tt: any;
  times: any;
  timespliting: any;
  today: any;
  dd: any;
  mm: any;
  yy: any;
  date: any;
  todayhour: any;
  todaymin: any;
  errMsg: any;

  constructor(
    private spinner: NgxSpinnerService,
    private appointmentService: AppointmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getOneUser(this.id);
    // this.getUser();
    // this.time = "9:00";
    // this.addUserData.time = this.time;
    if (!this.id) {
      this.getTime();
      this.gettUser();
    }
    this.getDate();
    this.tt = "8:45";
    if (this.today) {
      console.log(this.tt);
      this.addUserData.time = this.tt;
    }
  }

  getOneUser(id) {
    if (this.id) {
      console.log(this.id);
      this.appointmentService.getOneAppointment(this.id).subscribe(
        res => {
          console.log(res);
          this.addUserData = res;
        },
        err => {
          console.log(err);
        }
      );
    }
  }


  gettUser() {
    this.appointmentService.getToken().subscribe(data => {
      this.tokenArray = data;
      console.log(this.tokenArray);

      for (let i = 0; i < this.tokenArray.length; i++) {
        this.addUserData.tokenno = this.tokenArray[i].tokenno;
        this.tokenData.id = this.tokenArray[i]._id;
      }
      console.log(this.addUserData.tokenno);
      console.log(this.tokenData.id);
    });
  }

  // getUser() {
  //   var t = 9:00;
  //   this.time = t;
  //   this.appointmentService.getAppointment(this.time).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  addUser() {
    if (this.id) {
      this.appointmentService
        .updateAppointment(this.id, this.addUserData)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(["/appointment"]);
        });
    } else {
      this.addUserData.status = "Created";
      console.log(this.addUserData.tokenno);
      this.appointmentService
        .createAppointment(this.addUserData)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(["/appointment"]);
          let add = data.tokenno;
          this.tokenData.tokenno = parseInt(add) + 1;
          console.log(this.tokenData);
          this.updateToken();
        });
    }
  }

  updateToken() {
    console.log(this.tokenData);
    console.log(this.tokenData.id);
    this.appointmentService
      .updateToken(this.tokenData.id, this.tokenData)
      .subscribe(data => {
        console.log(data);
      });
  }

  getTime() {
    this.appointmentService.getAppointment().subscribe(data => {
      this.addAllUserArray = data;
      console.log(this.addAllUserArray);
      for (let i = 0; i < this.addAllUserArray.length; i++) {
        this.addUserData.time = this.addAllUserArray[i].time;
      }
      console.log(this.addUserData.time);
      this.addTime();
    });
  }

  addTime() {
    console.log(this.addUserData.time);
    this.timeArray = this.addUserData.time.split(":");
    console.log(this.timeArray);
    let timeMin = this.timeArray[1];
    this.minutes = parseInt(timeMin) + 15;
    if (this.minutes == 60) {
      let timeHour = this.timeArray[0];
      this.hours = parseInt(timeHour) + 1;
      this.timing = this.hours + ":00";
      console.log(this.timing);
    } else {
      this.timing = this.timeArray[0] + ":" + this.minutes;
      console.log(this.timing);
    }
    this.addUserData.time = this.timing;
    if (this.hours == 18) {
      if (this.today) {
        console.log("Appointment is closed.");
        this.errMsg = "Appointment is closed.";
      }
      this.getTodayTime();
    }
  }

  getTodayTime() {
    this.timeArray[0] = "9";
    this.timeArray[1] = "00";
    this.timing = this.timeArray[0] + ":" + this.timeArray[1];
    console.log(this.timing);
    this.addUserData.time = this.timing;
  }

  getDate() {
    this.today = new Date();
    this.dd = this.today.getDate();
    this.mm = this.today.getMonth() + 1;
    this.yy = this.today.getFullYear();
    this.date = this.dd + "/" + this.mm + "/" + this.yy;
    console.log(this.date);
    this.addUserData.date = this.date;
  }
}
