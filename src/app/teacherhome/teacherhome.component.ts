import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.css']
})
export class TeacherhomeComponent implements OnInit {
  data6={
    message:""
  }

  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Announce(){
    this.api.announce(this.data6).subscribe((data6)=>{
      alert()
    })
    
  }

}
