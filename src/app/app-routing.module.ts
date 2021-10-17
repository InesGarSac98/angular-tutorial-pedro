import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
    {
        path: 'teachers',
        loadChildren: () => import('./teachers-module/teachers.module')
            .then(m => m.TeachersModule)
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
    /*{
        path: 'students',
        loadChildren: () => import('./students-module/students-module.module')
            .then(m => m.StudentsModule)
    }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [
        ErrorPageComponent
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
