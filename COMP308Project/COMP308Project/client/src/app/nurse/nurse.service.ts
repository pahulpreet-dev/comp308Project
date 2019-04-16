import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NurseService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  private endPoint: any;
  private user: any;

  constructor(private http: HttpClient) { }

  createHealthData(data: any): Observable<any> {
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post<any>(this.endPoint + 'nurse/newPatientInfo', body, this.httpOptions);
  }

  readHealthData(user: any): Observable<any> {
    return this.http.post<any>(this.endPoint + 'nurse/viewPatientInfo' + user.id, user, this.httpOptions);
  }

}
