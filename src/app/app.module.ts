import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './web/body/body.component';
import { AddPersonScreenComponent } from './web/body/content/add-person-screen/add-person-screen.component';
import { ContentComponent } from './web/body/content/content.component';
import { SecondaryNavigationComponent } from './web/body/secondary-navigation/secondary-navigation.component';
import { TopNavigationComponent } from './web/top-navigation/top-navigation.component';
import { WebComponent } from './web/web.component';
import { MobileSecondaryNavigationComponent } from './web/body/secondary-navigation/mobile-secondary-navigation/mobile-secondary-navigation.component';
import { DesktopSecondaryNavigationComponent } from './web/body/secondary-navigation/desktop-secondary-navigation/desktop-secondary-navigation.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
