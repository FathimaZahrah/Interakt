import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(private api:InteraktserviceService) { 
    api.studDetail().subscribe(
      (response=>{
       this.data12=response
    }))
  }

  ngOnInit(): void {
  }
  data12:any=[]

}
