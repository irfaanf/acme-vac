import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonScreenComponent } from './web/body/content/add-person-screen/add-person-screen.component';

const routes: Routes = [
  { path: 'patients', component: AddPersonScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
