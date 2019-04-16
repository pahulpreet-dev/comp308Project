import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  private endPoint = 'http://localhost:3000/';
  private user: any;

  constructor(private http: HttpClient) { }

  signup(newUser: any): Observable<any> {
    const body = JSON.stringify(newUser);
    console.log(body);
    return this.http.post<any>(this.endPoint + 'nurseSignUp', body, this.httpOptions);
  }

  signinPatient(user: any): Observable<any> {
    return this.http.post<any>(this.endPoint, user, this.httpOptions);
  }
  signinNurse(user: any): Observable<any> {
    return this.http.post<any>(this.endPoint, user, this.httpOptions);
  }

  public storeNurse(user: any): void {
    localStorage.setItem('nurse', JSON.stringify(user));
    this.user = user;
  }
  public storePatient(user: any): void {
    localStorage.setItem('patient', JSON.stringify(user));
    this.user = user;
  }

  public logout(): void {
    this.user = null;
    localStorage.clear();
  }

  isNurseLoggedIn(): boolean {
    return (!!localStorage.getItem('nurse'));
  }
  isPatientLoggedIn(): boolean {
    return (!!localStorage.getItem('patient'));
  }


}
