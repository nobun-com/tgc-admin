import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';

@Injectable()
export class SocialListService {

constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getSocials() {
    return this.http.get(this.globals.SERVERADDRESS+'socialLinks').map((res:Response) => res.json());
}
 deleteSocial(socialId) {
    return this.http.delete(this.globals.SERVERADDRESS+'socialLinks/' + socialId);
  }

} 