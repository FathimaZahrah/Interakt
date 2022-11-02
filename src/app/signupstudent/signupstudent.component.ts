import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private api:InteraktserviceService,private router:Router) { }

  ngOnInit(): void {
    (() => {
      'use strict'
    
      const forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms).forEach(form => {
        form.addEventListener('submit',function(event:any){
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
  }
  Studreg()
  {
    this.api.studreg(this.data).subscribe((data)=>{

    })
    this.router.navigate(['/logins'])
    alert("success")

  }

}
