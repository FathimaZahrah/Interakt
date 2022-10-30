import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-mysqlassignstudent',
  templateUrl: './mysqlassignstudent.component.html',
  styleUrls: ['./mysqlassignstudent.component.css']
})
export class MysqlassignstudentComponent implements OnInit {

  constructor(private api:InteraktserviceService) { 
    api.mysqlassign().subscribe((response=>{
      this.data9=response
    }))
  }

  ngOnInit(): void {
  }
data9:any=[]
}
