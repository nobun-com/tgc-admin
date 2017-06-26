import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../globals';


@Injectable()
export class InstancesListService {

constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getInstances(classId) {
    return this.http.get(this.globals.SERVERADDRESS+'getAllClassInstances/' + classId).map((res:Response) => res.json());
}

} 