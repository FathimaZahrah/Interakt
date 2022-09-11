import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-signupstudent',
  templateUrl: './signupstudent.component.html',
  styleUrls: ['./signupstudent.component.css']
})
export class SignupstudentComponent implements OnInit {
data={
  studname:"",
  studregno:"",
  studcourse:"",
  studemail:"",
  studpass:""
}
  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Studreg()
  {
    this.api.studreg(this.data).subscribe((data)=>{

    })
    alert("Success")
  }

}
