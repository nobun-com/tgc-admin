import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../globals';


@Injectable()
export class ClassesService {

constructor(private http:Http,private globals : Globals) {
    }

// Uses http.get() to load a single JSON file

createClasses(classes) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(classes);
    return this.http.post(this.globals.SERVERADDRESS+'createClass', classes, options ).map((res: Response) => res.json());
  }

   updateClasse(classes) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(classes);
    return this.http.put(this.globals.SERVERADDRESS+'updateClass', classes, options ).map((res: Response) => res.json());
  }

  getById(id){
    return this.http.get(this.globals.SERVERADDRESS+'getClass/'+id).map((res: Response) => res.json());
  }


} 