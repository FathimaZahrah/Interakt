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
 dmnote(data7:any){
  return this.http.post<any>('http://localhost:3200/datanotesteach',data7)
 }
 dmassign(data8:any){
  return this.http.post<any>('http://localhost:3200/dataassignteach',data8)
 }
 dmtest(data9:any){
  return this.http.post<any>('http://localhost:3200/datatestteach',data9)
 }
 dmatten(data10:any){
  return this.http.post<any>('http://localhost:3200/dataattenteach',data10)
 }
 sqlnote(data11:any){
  return this.http.post<any>('http://localhost:3200/mynotesteach',data11)
 }
 sqlassign(data12:any){
  return this.http.post<any>('http://localhost:3200/myassignteach',data12)
 }
 sqltest(data13:any){
  return this.http.post<any>('http://localhost:3200/mytestteach',data13)
 }
 sqlatten(data14:any){
  return this.http.post<any>('http://localhost:3200/myattenteach',data14)
 }
 viewSub=()=>{
  return this.http.get('http://localhost:3200/viewSub')
 }
 ViewSub=()=>{
  return this.http.get('http://localhost:3200/ViewSub')
 }
 announcements=()=>{
  return this.http.get('http://localhost:3200/announcements')
 }
 dataminenotes=()=>{
  return this.http.get('http://localhost:3200/dataminenotes')
 }
 datamineassign=()=>{
  return this.http.get('http://localhost:3200/datamineassign')
 }
 dataminetest=()=>{
  return this.http.get('http://localhost:3200/dataminetest')
 }
 datamineatten=()=>{
  return this.http.get('http://localhost:3200/datamineatten')
 }
 mysqlnotes=()=>{
  return this.http.get('http://localhost:3200/mysqlnotes')
 }
 mysqlassign=()=>{
  return this.http.get('http://localhost:3200/mysqlassign')
 }
 mysqltest=()=>{
  return this.http.get('http://localhost:3200/mysqltest')
 }
 mysqlatten=()=>{
  return this.http.get('http://localhost:3200/mysqlatten')
 }
}
