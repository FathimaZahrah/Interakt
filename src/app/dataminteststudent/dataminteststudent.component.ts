import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-dataminteststudent',
  templateUrl: './dataminteststudent.component.html',
  styleUrls: ['./dataminteststudent.component.css']
})
export class DataminteststudentComponent implements OnInit {

  constructor(private api:InteraktserviceService) {
    api.dataminetest().subscribe((response=>{
      this.data6=response
    }))
   }

  ngOnInit(): void {
  }
data6:any=[]
}
