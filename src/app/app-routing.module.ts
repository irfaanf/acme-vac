import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonScreenComponent } from './web/body/content/add-person-screen/add-person-screen.component';
import { DashboardComponent } from './web/body/content/dashboard/dashboard.component';
import { ManageAllPatientsComponent } from './web/body/content/manage-all-patients/manage-all-patients.component';
import { ManagePatientComponent } from './web/body/content/manage-patient/manage-patient.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'patients', component: AddPersonScreenComponent },
  { path: 'manage-all', component: ManageAllPatientsComponent },
  { path: 'manage', component: ManagePatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
