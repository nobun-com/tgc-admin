import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';



@Injectable()
export class CentersService {

constructor(private http:Http,private globals : Globals) {
    }

getAreaAndDistrict() {
    return this.http.get(this.globals.SERVERADDRESS+'items/area').map((res:Response) => res.json());
}



// Uses http.get() to load a single JSON file

createCenter(center) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.globals.SERVERADDRESS+'createCenter', center, options ).map((res: Response) => res.json());
  }

  updateCenter(center) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.globals.SERVERADDRESS+'updateCenter', center, options ).map((res: Response) => res.json());
  }

  getById(id){
    return this.http.get(this.globals.SERVERADDRESS+'getCenter/'+id).map((res: Response) => res.json());
  }

  uploadLogo(files){
     return new Promise((resolve, reject) => {
          var formData = new FormData();
          var xhr = new XMLHttpRequest();
          formData.append("logo", files[0], files[0].name);
          xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                  if (xhr.status == 200) {
                      resolve(xhr.response);
                  } else {
                      reject(xhr.response);
                  }
              }
          }
          xhr.open("POST", this.globals.SERVERADDRESS+'uploadImage', true);
          xhr.setRequestHeader("enctype", "multipart/form-data");
          xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
          xhr.send(formData);
       });
  }

  getLogo(uuid){
    return this.http.get(this.globals.SERVERADDRESS+'getImage/'+uuid).map((res: Response) => res.json());
  }

} 