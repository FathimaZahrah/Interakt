import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-mysqlteststudent',
  templateUrl: './mysqlteststudent.component.html',
  styleUrls: ['./mysqlteststudent.component.css']
})
export class MysqlteststudentComponent implements OnInit {

  constructor(private api:InteraktserviceService) {
    api.mysqltest().subscribe((response=>{
      this.data10=response
    }))
   }

  ngOnInit(): void {
  }
  data10:any=[]

}
