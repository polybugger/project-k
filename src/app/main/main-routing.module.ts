import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ClassesComponent } from './classes/classes.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { SchoolmatesComponent } from './schoolmates/schoolmates.component';
import { Paths } from './../paths';
import { MainGuard } from './main.guard';

const routes: Routes = [
  {
    path: Paths.MAIN_SYMBOL,
    component: MainComponent,
    canActivate: [MainGuard],
    children: [ {
      path: Paths.EMPTY_SYMBOL,
      canActivateChild: [MainGuard],
      children: [
        { path: Paths.EMPTY_SYMBOL, redirectTo: Paths.CLASSES_SYMBOL, pathMatch: 'full' }
        , { path: Paths.CLASSES_SYMBOL, component: ClassesComponent }
        , { path: Paths.TEACHERS_SYMBOL, component: TeachersComponent }
        , { path: Paths.STUDENTS_SYMBOL, component: StudentsComponent }
        , { path: Paths.SCHOOLMATES_SYMBOL, component: SchoolmatesComponent }
      ]
    } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
