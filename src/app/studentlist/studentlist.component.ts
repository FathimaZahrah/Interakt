import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(private api:InteraktserviceService) {
    api.studDetail().subscribe(
      (response=>{
       this.data=response
    }))
   }

  ngOnInit(): void {
  }
data:any=[]

}
