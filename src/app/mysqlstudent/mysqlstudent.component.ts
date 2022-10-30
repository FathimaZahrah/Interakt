import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-mysqlstudent',
  templateUrl: './mysqlstudent.component.html',
  styleUrls: ['./mysqlstudent.component.css']
})
export class MysqlstudentComponent implements OnInit {

  constructor(private api:InteraktserviceService) {
    api.mysqlnotes().subscribe((response=>{
      this.data8=response
    }))
   }

  ngOnInit(): void {
  }
  data8:any=[]

}
