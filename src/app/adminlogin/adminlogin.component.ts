import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
username=""
password=""
  constructor(private api:InteraktserviceService, private router:Router) { }

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
  alogin(){
    if(this.username=="admin12@gmail.com" && this.password=="admin12"){
      this.router.navigate(['/adminhome'])
    }
    else{
      alert("Invalid credentials")
    }
  }

}
