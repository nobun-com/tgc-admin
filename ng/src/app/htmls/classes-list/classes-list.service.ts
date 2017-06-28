import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';


@Injectable()
export class ClassListService {

constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getClasses() {
    return this.http.get(this.globals.SERVERADDRESS+'getAllClasses').map((res:Response) => res.json());
}
 deleteClass(classId) {
    return this.http.delete(this.globals.SERVERADDRESS+'deleteClass/' + classId);
  }

} 