import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Injectable()
export class ClassListService {
role : string = Cookie.get('role'); 
userId : string = Cookie.get('userId'); 
constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getClasses() {
   if(this.role=='admin'){
        return this.http.get(this.globals.SERVERADDRESS+'getAllClasses').map((res:Response) => res.json());
   }else{
       console.log("user",this.userId);
        return this.http.get(this.globals.SERVERADDRESS+'getAllClassesByTeacher/'+this.userId).map((res:Response) => res.json());
   }
}
 deleteClass(classId) {
    return this.http.delete(this.globals.SERVERADDRESS+'deleteClass/' + classId);
  }

} 