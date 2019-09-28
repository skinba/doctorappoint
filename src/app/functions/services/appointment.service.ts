import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Appointment } from "../models/appointment";
import { Observable } from "rxjs";
import { Token } from '@angular/compiler/src/ml_parser/lexer';

const BASE_URL = "http://localhost:3000/api";
@Injectable({
  providedIn: "root"
})
export class AppointmentService {
  constructor(private httpClient: HttpClient) {}

  createAppointment(body: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${BASE_URL}/appointments`, body);
  }

  getAppointment(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${BASE_URL}/appointments`);
  }

  getOneAppointment(id: string): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${BASE_URL}/appointments/${id}`);
  }

  deleteAppointment(id: string): Observable<Appointment[]> {
    return this.httpClient.delete<Appointment[]>(
      `${BASE_URL}/appointments/${id}`
    );
  }
  updateAppointment(id: string, body: Appointment): Observable<Appointment[]> {
    return this.httpClient.put<Appointment[]>(
      `${BASE_URL}/appointments/${id}`,
      body
    );
  }

  updatAppointment(id: string, body: Appointment): Observable<Appointment[]> {
    return this.httpClient.put<Appointment[]>(
      `${BASE_URL}/appoint/${id}`,
      body
    );
  }

  // createToken(body: any): Observable<any[]> {
  //   return this.httpClient.post<any>(`${BASE_URL}/token`, body);
  // }

  getToken(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${BASE_URL}/token`);
  }

  updateToken(id: string, body: any): Observable<any[]> {
    return this.httpClient.put<any[]>(`${BASE_URL}/token/${id}`, body);
  }

  createUser(body: any): Observable<any> {
    return this.httpClient.post<any>(`${BASE_URL}/signup`, body);
  }

  createLoger(body: any): Observable<any> {
    return this.httpClient.post<any>(`${BASE_URL}/login`, body);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logOut()
  {
   localStorage.removeItem('token');
   
  }

  


  userAdmin() {
    let roll = localStorage.getItem('name');
    console.log(roll)
    if(roll == "admin")
    {
      return !!roll;
    }
  }


}
