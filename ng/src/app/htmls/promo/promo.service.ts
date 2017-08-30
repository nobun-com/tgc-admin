import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';


@Injectable()
export class PromoService {

constructor(private http:Http,private globals : Globals) {
    }


createPromo(promo) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.globals.SERVERADDRESS+'promo', promo, options ).map((res: Response) => res.json());
  }

  updatePromo(promo) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   return this.http.put(this.globals.SERVERADDRESS+'promo', promo, options ).map((res: Response) => res.json());
  }

  getById(id){
    return this.http.get(this.globals.SERVERADDRESS+'promo/'+id).map((res: Response) => res.json());
  }

  getCenters() {
      return this.http.get(this.globals.SERVERADDRESS+'getAllCenters').map((res:Response) => res.json());
  }
  
  rempovePromo(promo) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   return this.http.put(this.globals.SERVERADDRESS+'promo', promo, options ).map((res: Response) => res.json());
  }

 uploadImage(files){
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
          //xhr.setRequestHeader("enctype", "multipart/form-data");
          xhr.send(formData);
       });
  }

  getImage(uuid){
    return this.http.get(this.globals.SERVERADDRESS+'getImage/'+uuid).map((res: Response) => res.json());
  }


} 