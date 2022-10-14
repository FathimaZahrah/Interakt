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
  studlog(data3:any){
    return this.http.post<any>('http://localhost:3200/studlog',data3)
  }
 teachreg(dataa:any){
  return this.http.post<any>('http://localhost:3200/signupteacher',dataa)
 }
 teachlog(data5:any){
  return this.http.post<any>('http://localhost:3200/teachlog',data5)
 }
 addsub(data2:any){
  return this.http.post<any>('http://localhost:3200/subadd',data2)
 }
 allot(data4:any){
  return this.http.post<any>('http://localhost:3200/suballot',data4)
 }
 announce(data6:any){
  return this.http.post<any>('http://localhost:3200/teacherhome',data6)
 }
 viewSub=()=>{
  return this.http.get('http://localhost:3200/viewSub')
 }
 ViewSub=()=>{
  return this.http.get('http://localhost:3200/ViewSub')
 }
}
