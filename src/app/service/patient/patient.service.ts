import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patientsUrl: string;

  constructor(private httpClient: HttpClient) {
    this.patientsUrl = 'http://localhost:8080/ifconference/patients';
  }

  public findAll(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.patientsUrl);
  }

  public save(patient: Patient) {
    return this.httpClient.post<Patient>(this.patientsUrl, patient);
  }
}
