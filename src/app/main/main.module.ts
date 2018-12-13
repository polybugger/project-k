import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { ClassesComponent } from './classes/classes.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SchoolmatesComponent } from './schoolmates/schoolmates.component';

@NgModule({
  declarations: [
    MainNavBarComponent,
    MainComponent,
    ClassesComponent,
    StudentsComponent,
    TeachersComponent,
    SchoolmatesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MainRoutingModule
  ]
})
export class MainModule { }
