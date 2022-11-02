import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private aki:InteraktserviceService, private router:Router) { }

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
 Teachreg(){
  this.aki.teachreg(this.dataa).subscribe((dataa)=>{

  })
  this.router.navigate(['/logint'])
  alert("success")
 }

}
