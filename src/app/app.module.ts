import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./appointments/welcome/welcome.component";
import { AppointmentComponent } from "./appointments/appointment/appointment.component";
import { AddComponent } from "./appointments/add/add.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { DummyComponent } from './dummy/dummy.component';
import { LoginComponent } from './appointments/login/login.component';
import { SignupComponent } from './appointments/signup/signup.component';
import { AppointmentService } from './functions/services/appointment.service';
import { TokenInterceptorService } from './functions/services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AppointmentComponent,
    AddComponent,
    DummyComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
    },
    AppointmentService
  
],
  bootstrap: [AppComponent]
})
export class AppModule {}
