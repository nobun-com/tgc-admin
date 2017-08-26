import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';


@Injectable()
export class SocialService {

constructor(private http:Http,private globals : Globals) {
    }


createSocial(social) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.globals.SERVERADDRESS+'socialLinks', social, options ).map((res: Response) => res.json());
  }

  updateSocial(social) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   return this.http.put(this.globals.SERVERADDRESS+'socialLinks', social, options ).map((res: Response) => res.json());
  }

  getById(id){
    return this.http.get(this.globals.SERVERADDRESS+'socialLinks/'+id).map((res: Response) => res.json());
  }

 
} 