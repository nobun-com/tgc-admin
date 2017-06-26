import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../globals';

@Injectable()
export class ArticleService {

constructor(private http:Http,private globals : Globals) {
    }


createArticle(article) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(article);
    return this.http.post(this.globals.SERVERADDRESS+'createArticle', article, options ).map((res: Response) => res.json());
  }

  updateArticle(article) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(article);
    return this.http.put(this.globals.SERVERADDRESS+'updateArticle', article, options ).map((res: Response) => res.json());
  }

  getById(id){
    return this.http.get(this.globals.SERVERADDRESS+'getArticle/'+id).map((res: Response) => res.json());
  }

  getCategory() {
    return this.http.get(this.globals.SERVERADDRESS+'getAllArticleCategories').map((res:Response) => res.json());
}


} 