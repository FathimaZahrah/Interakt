import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-mysqlattenteacher',
  templateUrl: './mysqlattenteacher.component.html',
  styleUrls: ['./mysqlattenteacher.component.css']
})
export class MysqlattenteacherComponent implements OnInit {
  data14={
    attensql:""
  }

  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Sqlatten(){
    this.api.sqlatten(this.data14).subscribe((data14)=>{
      
    })
    alert("success")
  }

}
