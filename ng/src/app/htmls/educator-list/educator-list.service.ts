import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';

@Injectable()
export class EducatorListService {

constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getEducators() {
    return this.http.get(this.globals.SERVERADDRESS+'getAllEducators').map((res:Response) => res.json());
}
 deleteEducator(educatorId) {
    return this.http.delete(this.globals.SERVERADDRESS+'deleteEducator/' + educatorId);
  }

} 