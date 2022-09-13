import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupteacherComponent } from './signupteacher/signupteacher.component';
import { SignupstudentComponent } from './signupstudent/signupstudent.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginteacherComponent } from './loginteacher/loginteacher.component';
import { MysqlstudentComponent } from './mysqlstudent/mysqlstudent.component';
import { MysqlassignstudentComponent } from './mysqlassignstudent/mysqlassignstudent.component';
import { MysqlattenstudentComponent } from './mysqlattenstudent/mysqlattenstudent.component';
import { MysqlteacherComponent } from './mysqlteacher/mysqlteacher.component';
import { MysqlassignteacherComponent } from './mysqlassignteacher/mysqlassignteacher.component';
import { MysqlattenteacherComponent } from './mysqlattenteacher/mysqlattenteacher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignupteacherComponent,
    SignupstudentComponent,
    TeacherhomeComponent,
    StudenthomeComponent,
    LoginComponent,
    LoginteacherComponent,
    MysqlstudentComponent,
    MysqlassignstudentComponent,
    MysqlattenstudentComponent,
    MysqlteacherComponent,
    MysqlassignteacherComponent,
    MysqlattenteacherComponent
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
