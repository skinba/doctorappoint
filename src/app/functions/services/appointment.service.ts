import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Appointment } from "../models/appointment";
import { Observable } from "rxjs";

const BASE_URL = "http://localhost:2000/api";
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

  getToken(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${BASE_URL}/token`);
  }

  updateToken(id: string, body: any): Observable<any[]> {
    return this.httpClient.put<any[]>(`${BASE_URL}/token/${id}`, body);
  }
}
