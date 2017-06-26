import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../globals';


@Injectable()
export class CentersListService {

constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getCenters() {
    return this.http.get(this.globals.SERVERADDRESS+'getAllCenters').map((res:Response) => res.json());
}
 deleteCenter(centerId) {
    return this.http.delete(this.globals.SERVERADDRESS+'deleteCenter/' + centerId);
  }

} 