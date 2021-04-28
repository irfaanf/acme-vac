import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient/patient';
import { PatientService } from 'src/app/service/patient/patient.service';


@Component({
  selector: 'app-add-person-screen',
  templateUrl: './add-person-screen.component.html',
  styleUrls: ['./add-person-screen.component.scss']
})
export class AddPersonScreenComponent implements OnInit {

  patient: Patient;

  startDate: Date;

  constructor(private patientService: PatientService, private router: Router) { 
    this.patient = new Patient();
  }

  ngOnInit(): void {
    this.startDate = new Date(1930, 0, 1);
  }

  onSubmit() {
    this.patientService.save(this.patient).subscribe(result => {
      this.router.navigate(['/patients']);
    })
  }

}
