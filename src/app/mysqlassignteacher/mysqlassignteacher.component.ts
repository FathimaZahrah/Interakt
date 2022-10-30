import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-mysqlassignteacher',
  templateUrl: './mysqlassignteacher.component.html',
  styleUrls: ['./mysqlassignteacher.component.css']
})
export class MysqlassignteacherComponent implements OnInit {
  data12={
    assignsql:""
  }

  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Sqlassign(){
    this.api.sqlassign(this.data12).subscribe((data12)=>{

    })
    alert("success")
  }

}
