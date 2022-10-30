import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-dataminattenteacher',
  templateUrl: './dataminattenteacher.component.html',
  styleUrls: ['./dataminattenteacher.component.css']
})
export class DataminattenteacherComponent implements OnInit {
  data10={
    attendata:""
  }

  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Dmatten(){
    this.api.dmatten(this.data10).subscribe((data10)=>{
      alert()
    })
  }

}
