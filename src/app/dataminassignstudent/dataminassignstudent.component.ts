import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-dataminassignstudent',
  templateUrl: './dataminassignstudent.component.html',
  styleUrls: ['./dataminassignstudent.component.css']
})
export class DataminassignstudentComponent implements OnInit {

  constructor(private api:InteraktserviceService) { 
    api.datamineassign().subscribe((response=>{
      this.data5=response
    }))
  }

  ngOnInit(): void {
  }
  data5:any=[]

}
