import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-loginteacher',
  templateUrl: './loginteacher.component.html',
  styleUrls: ['./loginteacher.component.css']
})
export class LoginteacherComponent implements OnInit {
  dataa={
    teachemail:"",
    teachpass:""
  }

  constructor(private api:InteraktserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  Teachlog(){
    this.api.teachlog(this.dataa).subscribe((dataa) => {
      if (dataa.success === true){
        this.router.navigate(['/teacherhome'])
      }
      else{
        alert(dataa.success)
      }

    })
  }

}
