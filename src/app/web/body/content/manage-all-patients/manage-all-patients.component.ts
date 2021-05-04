import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient/patient';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-manage-all-patients',
  templateUrl: './manage-all-patients.component.html',
  styleUrls: ['./manage-all-patients.component.scss']
})
export class ManageAllPatientsComponent implements OnInit {
  dataSource: Patient[];

  displayedColumns: string[];

  constructor(private patientService:PatientService) {
    this.displayedColumns = ['firstName']
   }

  ngOnInit(): void {
    this.patientService.findAll().subscribe(result => {
      this.dataSource = result;
    })
  }

}
