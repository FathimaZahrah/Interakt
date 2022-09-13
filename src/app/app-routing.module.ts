import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupstudentComponent } from './signupstudent/signupstudent.component';
import { SignupteacherComponent } from './signupteacher/signupteacher.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { LoginComponent } from './login/login.component';
import { LoginteacherComponent } from './loginteacher/loginteacher.component';
import { MysqlstudentComponent } from './mysqlstudent/mysqlstudent.component';
import { MysqlassignstudentComponent } from './mysqlassignstudent/mysqlassignstudent.component';
import { MysqlattenstudentComponent } from './mysqlattenstudent/mysqlattenstudent.component';
import { MysqlteacherComponent } from './mysqlteacher/mysqlteacher.component';
import { MysqlassignteacherComponent } from './mysqlassignteacher/mysqlassignteacher.component';
import { MysqlattenteacherComponent } from './mysqlattenteacher/mysqlattenteacher.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signupstudent",component:SignupstudentComponent},
  {path:"signupteacher",component:SignupteacherComponent},
  {path:"studenthome",component:StudenthomeComponent},
  {path:"teacherhome",component:TeacherhomeComponent},
  {path:"logins",component:LoginComponent},
  {path:"logint",component:LoginteacherComponent},
  {path:"mynotestud",component:MysqlstudentComponent},
  {path:"myassignstud",component:MysqlassignstudentComponent},
  {path:"myattenstud",component:MysqlattenstudentComponent},
  {path:"mynotesteach",component:MysqlteacherComponent},
  {path:"myassignteach",component:MysqlassignteacherComponent},
  {path:"myattenteach",component:MysqlattenteacherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
