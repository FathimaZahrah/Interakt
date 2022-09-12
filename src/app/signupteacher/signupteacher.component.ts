import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-signupteacher',
  templateUrl: './signupteacher.component.html',
  styleUrls: ['./signupteacher.component.css']
})
export class SignupteacherComponent implements OnInit {
  data1={
    name:"",
    facid:"",
    dept:"",
    course:"",
    sem:"",
    email:"",
    pass:""
  }

  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Teachreg()
  {
    this.api.teachreg(this.data1).subscribe((data)=>{

    })
    alert("Success")
  }

}
