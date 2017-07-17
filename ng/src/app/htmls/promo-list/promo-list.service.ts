import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';

@Injectable()
export class PromoListService {

constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getPromos() {
    return this.http.get(this.globals.SERVERADDRESS+'promo').map((res:Response) => res.json());
}
 deletePromo(promoId) {
    return this.http.delete(this.globals.SERVERADDRESS+'promo/' + promoId);
  }

} 