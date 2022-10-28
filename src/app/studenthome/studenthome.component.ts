import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(private api:InteraktserviceService) { 
    api.announcements().subscribe((response=>{
this.data3=response
    }))
  }

  ngOnInit(): void {
  }

  data3:any=[]

}
