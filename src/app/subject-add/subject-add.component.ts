import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {
data2={
  subid:"",
  subname:""
}
  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
Addsub(){
  this.api.addsub(this.data2).subscribe((data)=>{

  })
  alert("success")
}
}
