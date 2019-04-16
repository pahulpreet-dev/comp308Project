import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { EnterPatientIdComponent } from './nurse/enter-patient-id/enter-patient-id.component';
import { ListPreviousVisitsComponent } from './nurse/list-previous-visits/list-previous-visits.component';
import { AddNewReadingsComponent } from './nurse/add-new-readings/add-new-readings.component';
import { PreviousVisitDetailsComponent } from './nurse/previous-visit-details/previous-visit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    EnterPatientIdComponent,
    ListPreviousVisitsComponent,
    AddNewReadingsComponent,
    PreviousVisitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
