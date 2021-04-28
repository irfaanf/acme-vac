import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient/patient';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  patientList: Patient[];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.findAll().subscribe(data => {
      this.patientList = data;
    }
    )
  }

}
