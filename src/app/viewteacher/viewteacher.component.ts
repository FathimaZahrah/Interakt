import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-viewteacher',
  templateUrl: './viewteacher.component.html',
  styleUrls: ['./viewteacher.component.css']
})
export class ViewteacherComponent implements OnInit {

  constructor(private api:InteraktserviceService) {
    api.teachDetail().subscribe(
      (response=>{
       this.data13=response
    }))
   }

  ngOnInit(): void {
  }
  data13:any=[]

}
