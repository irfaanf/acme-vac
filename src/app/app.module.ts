import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientService } from './service/patient/patient.service';
import { BodyComponent } from './web/body/body.component';
import { AddPersonScreenComponent } from './web/body/content/add-person-screen/add-person-screen.component';
import { ContentComponent } from './web/body/content/content.component';
import { DashboardComponent } from './web/body/content/dashboard/dashboard.component';
import { ManagePatientComponent } from './web/body/content/manage-patient/manage-patient.component';
import { DesktopSecondaryNavigationComponent } from './web/body/secondary-navigation/desktop-secondary-navigation/desktop-secondary-navigation.component';
import { MobileSecondaryNavigationComponent } from './web/body/secondary-navigation/mobile-secondary-navigation/mobile-secondary-navigation.component';
import { SecondaryNavigationComponent } from './web/body/secondary-navigation/secondary-navigation.component';
import { PatientListComponent } from './web/common/patient/patient-list/patient-list.component';
import { TopNavigationComponent } from './web/top-navigation/top-navigation.component';
import { WebComponent } from './web/web.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    AddPersonScreenComponent,
    TopNavigationComponent,
    SecondaryNavigationComponent,
    WebComponent,
    BodyComponent,
    ContentComponent,
    MobileSecondaryNavigationComponent,
    DesktopSecondaryNavigationComponent,
    PatientListComponent,
    DashboardComponent,
    ManagePatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [PatientService],
  bootstrap: [AppComponent],
})
export class AppModule { }
