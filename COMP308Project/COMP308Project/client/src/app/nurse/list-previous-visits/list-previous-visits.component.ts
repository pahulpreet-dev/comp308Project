import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NurseService } from '../nurse.service';
import { Patient } from 'src/app/models/patient';
import { Health } from 'src/app/models/health';

@Component({
  selector: 'app-list-previous-visits',
  templateUrl: './list-previous-visits.component.html',
  styleUrls: ['../../css/main.css']
})
export class ListPreviousVisitsComponent implements OnInit {
  patientId: number;
  healthData: Health[];
  sortedHealth: Health[];
  constructor(private nurseService: NurseService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    if (!this.authService.isNurseLoggedIn) {
      this.router.navigate(['/login']);
    }

    this.activatedRoute.params.subscribe(params =>{
      this.patientId = +this.activatedRoute.snapshot.paramMap.get('id');
    });

    this.nurseService.readHealthData(this.patientId).subscribe(data => {
      this.healthData = data;
    });

    this.healthData.forEach(function(h) {

      if (this.healthData.patientId === this.patientId) {
        this.sortedHealth = h;
      }
    });
  }

  viewDetails(data: Health): void {
    localStorage.setItem('visit-details', JSON.stringify(data));
    this.router.navigate(['/visit-details']);
  }

}
