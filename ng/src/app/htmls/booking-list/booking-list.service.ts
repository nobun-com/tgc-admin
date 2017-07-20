import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Injectable()
export class BookingListService {
constructor(private http:Http,private globals : Globals) {
    }

        getBookings() {
                return this.http.get(this.globals.SERVERADDRESS+'getAllBookings').map((res:Response) => res.json());
        }

        getBookingsByDate(data){
                let headers = new Headers({ 'Content-Type': 'application/json' });
                let options = new RequestOptions({ headers: headers });
                return this.http.post(this.globals.SERVERADDRESS+'getAllBookingsByDate',data,options).map((res:Response) => res.json());
        }
} 