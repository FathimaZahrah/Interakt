import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-mysqlattenstudent',
  templateUrl: './mysqlattenstudent.component.html',
  styleUrls: ['./mysqlattenstudent.component.css']
})
export class MysqlattenstudentComponent implements OnInit {

  constructor(private api:InteraktserviceService) { 
    api.mysqlatten().subscribe((response=>{
      this.data11=response
    }))
  }

  ngOnInit(): void {
  }
  data11:any=[]

}
