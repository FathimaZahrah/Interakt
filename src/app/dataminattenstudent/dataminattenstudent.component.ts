import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-dataminattenstudent',
  templateUrl: './dataminattenstudent.component.html',
  styleUrls: ['./dataminattenstudent.component.css']
})
export class DataminattenstudentComponent implements OnInit {

  constructor(private api:InteraktserviceService) { 
    api.datamineatten().subscribe((response=>{
      this.data7=response
    }))
  }

  ngOnInit(): void {
  }
  data7:any=[]

}
