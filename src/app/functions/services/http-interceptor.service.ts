import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppointmentService } from '../services/appointment.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

 constructor(private appointmentservice : AppointmentService) { }


 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const headersConfig = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
  const token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    headersConfig['Authorization'] = `bearer ${token}`
  }
  const _req = req.clone({ setHeaders: headersConfig });
  return next.handle(_req);
}
}
