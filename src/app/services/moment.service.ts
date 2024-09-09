import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../Moment';
import { HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class MomentService {
  apiUrl: any;

  constructor(private http: HttpClient) {}

  getMoments(): Observable<HttpResponse<Moment[]>> {
    return this.http.get<HttpResponse<Moment[]>>(this.apiUrl);
  }

  getMoment(id: number): Observable<HttpResponse<Moment>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<HttpResponse<Moment>>(url);
  }

  createMoment(formData: FormData): Observable<HttpResponse<FormData>> {
    return this.http.post<HttpResponse<FormData>>(this.apiUrl, formData);
  }

  removeMoment(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateMoment(id: number, formData: FormData): Observable<HttpResponse<FormData>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<HttpResponse<FormData>>(url, formData);
  }
}