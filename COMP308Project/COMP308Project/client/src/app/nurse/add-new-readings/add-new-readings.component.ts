import { Component, OnInit } from '@angular/core';
import { NurseService } from '../nurse.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Health } from 'src/app/models/health';

@Component({
  selector: 'app-add-new-readings',
  templateUrl: './add-new-readings.component.html',
  styleUrls: ['../../css/main.css']
})
export class AddNewReadingsComponent implements OnInit {

  errorMsg: any;
  healthData: Health;
  patientId: number;
  constructor(private nurseService: NurseService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    if(!this.authService.isNurseLoggedIn) {
      this.router.navigate(['/login']);
    }
    this.activatedRoute.params.subscribe(params => {
      this.patientId = +this.activatedRoute.snapshot.paramMap.get('id');
    });
  }

  addReadings(): void {
    this.nurseService.createHealthData(this.healthData).subscribe(data => {
      alert('Data saved');
    }, error => {
      this.errorMsg = error;
    });
  }
}
