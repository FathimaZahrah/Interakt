import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-dataminteacher',
  templateUrl: './dataminteacher.component.html',
  styleUrls: ['./dataminteacher.component.css']
})
export class DataminteacherComponent implements OnInit {
  data7={
    notedata:""
  }

  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Dmnote(){
    this.api.dmnote(this.data7).subscribe((data7)=>{
      alert()
    })
    
  }
  

}
