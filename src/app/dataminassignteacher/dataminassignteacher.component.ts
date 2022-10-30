import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-dataminassignteacher',
  templateUrl: './dataminassignteacher.component.html',
  styleUrls: ['./dataminassignteacher.component.css']
})
export class DataminassignteacherComponent implements OnInit {
  data8={
    assigndata:""
  }

  constructor(private api:InteraktserviceService) { }

  ngOnInit(): void {
  }
  Dmassign(){
    this.api.dmassign(this.data8).subscribe((data8)=>{
      alert()
    })
  }

}
