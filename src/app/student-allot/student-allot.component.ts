import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-student-allot',
  templateUrl: './student-allot.component.html',
  styleUrls: ['./student-allot.component.css']
})
export class StudentAllotComponent implements OnInit {

  constructor(private api:InteraktserviceService) { 
    api.viewSub().subscribe((response=>{
      this.data2=response
    }))
  }

  ngOnInit(): void {
  }
  data2:any=[]

}
