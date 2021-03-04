import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "@src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  // @ts-ignore
  addStudent(student: any): Observable<any>{
    let host = environment.host;
    return this.http.post<any>(host+"/students",student);
  }
  getStudents(): Observable<any[]>{
    let host = environment.host;
    return this.http.get<any[]>(host+"/students");
  }
}
