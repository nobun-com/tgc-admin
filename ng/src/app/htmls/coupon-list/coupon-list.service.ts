import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';


@Injectable()
export class CouponListService {

constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getCoupons() {
    return this.http.get(this.globals.SERVERADDRESS+'getAllCoupons').map((res:Response) => res.json());
}
 deleteCoupon(couponId) {
    return this.http.delete(this.globals.SERVERADDRESS+'deleteCoupon/' + couponId);
  }

} 