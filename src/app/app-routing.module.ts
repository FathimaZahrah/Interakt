import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupstudentComponent } from './signupstudent/signupstudent.component';
import { SignupteacherComponent } from './signupteacher/signupteacher.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signupstudent",component:SignupstudentComponent},
  {path:"signupteacher",component:SignupteacherComponent},
  {path:"studenthome",component:StudenthomeComponent},
  {path:"teacherhome",component:TeacherhomeComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
