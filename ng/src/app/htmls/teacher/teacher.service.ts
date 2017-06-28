import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';

@Injectable()
export class TeacherService {

constructor(private http:Http,private globals : Globals) {
    }


createTeacher(teacher) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(teacher);
    return this.http.post(this.globals.SERVERADDRESS+'createTeacher', teacher, options ).map((res: Response) => res.json());
  }

  updateTeacher(teacher) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(teacher);
    return this.http.put(this.globals.SERVERADDRESS+'updateTeacher', teacher, options ).map((res: Response) => res.json());
  }

  getById(id){
    return this.http.get(this.globals.SERVERADDRESS+'getTeacher/'+id).map((res: Response) => res.json());
  }

} 