import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-mysqlteacher',
  templateUrl: './mysqlteacher.component.html',
  styleUrls: ['./mysqlteacher.component.css']
})
export class MysqlteacherComponent implements OnInit {
  data11={
    notesql:""
  }

  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Sqlnote(){
    this.api.sqlnote(this.data11).subscribe((data11)=>{
      alert()
    })
  }
}
