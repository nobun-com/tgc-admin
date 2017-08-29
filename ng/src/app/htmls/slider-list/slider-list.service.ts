import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';

@Injectable()
export class SliderListService {

constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getSliders() {
    return this.http.get(this.globals.SERVERADDRESS+'slider').map((res:Response) => res.json());
}
 deleteSlider(sliderId) {
    return this.http.delete(this.globals.SERVERADDRESS+'slider/' + sliderId);
  }

} 