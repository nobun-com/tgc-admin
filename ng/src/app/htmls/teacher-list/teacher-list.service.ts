import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../globals';

@Injectable()
export class TeacherListService {

constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getTeachers() {
    return this.http.get(this.globals.SERVERADDRESS+'getAllTeachers').map((res:Response) => res.json());
}
 deleteTeacher(teacherId) {
    return this.http.delete(this.globals.SERVERADDRESS+'deleteTeacher/' + teacherId);
  }

} 