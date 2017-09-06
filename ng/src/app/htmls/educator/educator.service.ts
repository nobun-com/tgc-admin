import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';

@Injectable()
export class EducatorService {

constructor(private http:Http,private globals : Globals) {
    }


createEducator(educator) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.globals.SERVERADDRESS+'createEducator', educator, options ).map((res: Response) => res.json());
  }

  updateEducator(educator) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.globals.SERVERADDRESS+'updateEducator', educator, options ).map((res: Response) => res.json());
  }

  getById(id){
    return this.http.get(this.globals.SERVERADDRESS+'getEducator/'+id).map((res: Response) => res.json());
  }

} 