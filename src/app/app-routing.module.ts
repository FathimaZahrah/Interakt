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
import { MysqlteststudentComponent } from './mysqlteststudent/mysqlteststudent.component';
import { MysqltestteacherComponent } from './mysqltestteacher/mysqltestteacher.component';
import { DataminteacherComponent } from './dataminteacher/dataminteacher.component';
import { DatamintestteacherComponent } from './datamintestteacher/datamintestteacher.component';
import { DataminassignteacherComponent } from './dataminassignteacher/dataminassignteacher.component';
import { DataminattenteacherComponent } from './dataminattenteacher/dataminattenteacher.component';
import { DataminstudentComponent } from './dataminstudent/dataminstudent.component';
import { DataminteststudentComponent } from './dataminteststudent/dataminteststudent.component';
import { DataminassignstudentComponent } from './dataminassignstudent/dataminassignstudent.component';
import { DataminattenstudentComponent } from './dataminattenstudent/dataminattenstudent.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MysqlhometeacherComponent } from './mysqlhometeacher/mysqlhometeacher.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { ViewteacherComponent } from './viewteacher/viewteacher.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

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
  {path:"myteststud",component:MysqlteststudentComponent},

  {path:"myhometeach",component:MysqlhometeacherComponent},
  {path:"mynotesteach",component:MysqlteacherComponent},
  {path:"myassignteach",component:MysqlassignteacherComponent},
  {path:"myattenteach",component:MysqlattenteacherComponent},
  {path:"mytestteach",component:MysqltestteacherComponent},

  {path:"datanotesteach",component:DataminteacherComponent},
  {path:"datatestteach",component:DatamintestteacherComponent},
  {path:"dataassignteach",component:DataminassignteacherComponent},
  {path:"dataattenteach",component:DataminattenteacherComponent},

  {path:"datanotesstud",component:DataminstudentComponent},
  {path:"datateststud",component:DataminteststudentComponent},
  {path:"dataassignstud",component:DataminassignstudentComponent},
  {path:"dataattenstud",component:DataminattenstudentComponent},

  {path:"adminhome",component:AdminhomeComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"studview",component:ViewstudentComponent},
  {path:"teachview",component:ViewteacherComponent},

  {path:"studlist",component:StudentlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
