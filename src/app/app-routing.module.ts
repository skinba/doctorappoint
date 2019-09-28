import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./appointments/welcome/welcome.component";
import { AppointmentComponent } from "./appointments/appointment/appointment.component";
import { AddComponent } from "./appointments/add/add.component";
import { DummyComponent } from './dummy/dummy.component';
import { LoginComponent } from './appointments/login/login.component';
import { SignupComponent } from './appointments/signup/signup.component';

const routes: Routes = [
  
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
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
  },
  {
    path: "dummy",
    component: DummyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
