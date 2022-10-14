import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
username="admin12@gmail.com"
password="admin12"
  constructor(private api:InteraktserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  alogin(){
    if(this.username && this.password){
      this.router.navigate(['/adminhome'])
    }
    else{
      alert("Invalid credentials")
    }
  }

}
