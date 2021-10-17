import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherClassroomsComponent } from './teacher-classrooms.component';
import { RouterModule, Routes } from '@angular/router';
import { ListTeacherClassroomsComponent } from './list-teacher-classrooms/list-teacher-classrooms.component';
import { FormTeacherClassroomsComponent } from './form-teacher-classrooms/form-teacher-classrooms.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListTeacherClassroomsComponent,
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: FormTeacherClassroomsComponent,
        pathMatch: 'full'
      },
      {
        path: ':classroomId/edit',
        component: FormTeacherClassroomsComponent,
        pathMatch: 'full'
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    TeacherClassroomsComponent,
    ListTeacherClassroomsComponent,
    FormTeacherClassroomsComponent
  ]
})
export class TeacherClassroomsModule { }
