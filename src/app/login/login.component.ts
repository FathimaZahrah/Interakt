import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data={
    studemail:"",
    studpass:""
  }

  constructor(private api:InteraktserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  Studlog(){
    this.api.studlog(this.data).subscribe((data) => {
      if (data.success === true){
        this.router.navigate(['/studenthome'])
      }
      else{
        alert(data.success)
      }
    })
  }

}
