import { Component, OnInit } from '@angular/core';
import { InteraktserviceService } from '../interaktservice.service';

@Component({
  selector: 'app-subject-allotment',
  templateUrl: './subject-allotment.component.html',
  styleUrls: ['./subject-allotment.component.css']
})
export class SubjectAllotmentComponent implements OnInit {

  data4={
    allotid:"",
    allotname:"",
    allotteachid:"",
    allotteachname:""
  }
  constructor(private api:InteraktserviceService) { 
    api.ViewSub().subscribe((response=>{
      this.data3=response
    }))
  }

  ngOnInit(): void {
  }
data3:any=[]

  Allot(){
    this.api.allot(this.data4).subscribe((data)=>{

    })
  }

}
