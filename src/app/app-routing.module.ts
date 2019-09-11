import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./appointments/welcome/welcome.component";
import { AppointmentComponent } from "./appointments/appointment/appointment.component";
import { AddComponent } from "./appointments/add/add.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "appointment",
    component: AppointmentComponent
  },
  {
    path: "add",
    component: AddComponent
  },
  {
    path: "add/:id",
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
