import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
    children: [
      {
        path: ':teacherId/classrooms',
        loadChildren: () => import('./teacher-classrooms/teacher-classrooms.module')
            .then(m => m.TeacherClassroomsModule)
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    TeachersComponent
  ],
  exports: [TeachersComponent]
})
export class TeachersModule { }
