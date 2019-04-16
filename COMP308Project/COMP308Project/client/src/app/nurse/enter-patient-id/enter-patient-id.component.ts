import { Component, OnInit } from '@angular/core';
import { NurseService } from '../nurse.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-enter-patient-id',
  templateUrl: './enter-patient-id.component.html',
  styleUrls: ['../../css/main.css']
})
export class EnterPatientIdComponent implements OnInit {

  patientId: number;
  constructor(private nurseService: NurseService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    if (!this.authService.isNurseLoggedIn) {
      alert('Please login first');
      this.router.navigate(['/login']);
    }
  }

  getPatient(): void {
      this.router.navigate(['/previous-visits', this.patientId]);
  }

}
