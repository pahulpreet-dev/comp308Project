import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { Nurse } from 'src/app/models/nurse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../css/main.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  userPatient: boolean;
  user: any;
  constructor(private authenticationService: AuthService,
              private router: Router) { }

ngOnInit() {
  this.user = new Patient();
  this.userPatient = true;
}

userType(value: string): void {
  if (value === 'Nurse') {
    this.userPatient = false;
    this.user = new Nurse();
  } else if (value === 'Patient') {
    this.userPatient = true;
    this.user = new Patient();
  }
}

signin(): void {
  if (this.userPatient) {
    this.authenticationService.signinPatient(this.user).subscribe(data => {
          this.authenticationService.storePatient(data);
          this.router.navigate(['/home']);
        }, error => this.errorMessage = error);
  } else if (!this.userPatient) {
    this.authenticationService.signinNurse(this.user).subscribe(data => {
      this.authenticationService.storeNurse(data);
      this.router.navigate(['/nurse-home']);
    }, error => this.errorMessage = error);
  }
}
}
