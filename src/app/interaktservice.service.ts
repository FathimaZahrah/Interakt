import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteraktserviceService {

  constructor(private http:HttpClient) { }
  studreg(data:any){
    return this.http.post<any>('http://localhost:3200/signupstudent',data)
  }
  teachreg(data1:any){
    return this.http.post<any>('http://localhost:3200/signupteacher',data1)
  }
}
