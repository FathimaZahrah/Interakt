import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-mysqltestteacher',
  templateUrl: './mysqltestteacher.component.html',
  styleUrls: ['./mysqltestteacher.component.css']
})
export class MysqltestteacherComponent implements OnInit {
  data13={
    testsql:""
  }

  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Sqltest(){
    this.api.sqltest(this.data13).subscribe((data13)=>{
      
    })
    alert("success")
  }
}
