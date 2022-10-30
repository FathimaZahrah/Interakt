import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-dataminstudent',
  templateUrl: './dataminstudent.component.html',
  styleUrls: ['./dataminstudent.component.css']
})
export class DataminstudentComponent implements OnInit {

  constructor(private api:InteraktserviceService) { 
    api.dataminenotes().subscribe((response=>{
      this.data4=response
    }))
  }

  ngOnInit(): void {
  }
data4:any=[]
}
