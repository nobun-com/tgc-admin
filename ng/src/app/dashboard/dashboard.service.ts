import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../common/globals';


@Injectable()
export class DashboardService {

constructor(private http:Http,private globals : Globals) {
    }

  getDashBoardData(){
    return this.http.get(this.globals.SERVERADDRESS+'adminDashboard').map((res: Response) => res.json());
  }

} 