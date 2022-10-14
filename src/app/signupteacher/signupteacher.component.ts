import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-signupteacher',
  templateUrl: './signupteacher.component.html',
  styleUrls: ['./signupteacher.component.css']
})
export class SignupteacherComponent implements OnInit {
  dataa={
    teachname:"",
    teachfac:"",
    teachdept:"",
    teachcourse:"",
    teachemail:"",
    teachpass:""
  }
  
  constructor(private aki:InteraktserviceService) { }

  ngOnInit(): void {
  }
 Teachreg(){
  this.aki.teachreg(this.dataa).subscribe((dataa)=>{

  })
 }

}
