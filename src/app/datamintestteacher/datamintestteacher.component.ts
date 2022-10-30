import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-datamintestteacher',
  templateUrl: './datamintestteacher.component.html',
  styleUrls: ['./datamintestteacher.component.css']
})
export class DatamintestteacherComponent implements OnInit {
  data9={
    testdata:""
  }

  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Dmtest(){
    this.api.dmtest(this.data9).subscribe((data9)=>{
      
    })
    alert("success")
  }

}
