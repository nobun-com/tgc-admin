import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../globals';


@Injectable()
export class CouponService {

constructor(private http:Http,private globals : Globals) {
    }


createCoupon(coupon) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(coupon);
    return this.http.post(this.globals.SERVERADDRESS+'createCoupon', coupon, options ).map((res: Response) => res.json());
  }

  updateCoupon(coupon) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(coupon);
    return this.http.put(this.globals.SERVERADDRESS+'updateCoupon', coupon, options ).map((res: Response) => res.json());
  }

  getById(id){
    return this.http.get(this.globals.SERVERADDRESS+'getCoupon/'+id).map((res: Response) => res.json());
  }

} 