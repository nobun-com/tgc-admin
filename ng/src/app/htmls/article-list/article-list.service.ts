import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Globals } from '../globals';

@Injectable()
export class ArticleListService {

constructor(private http:Http,private globals : Globals) {
    }


// Uses http.get() to load a single JSON file
getArticles() {
    return this.http.get(this.globals.SERVERADDRESS+'getAllArticles').map((res:Response) => res.json());
}
 deleteArticle(articleId) {
    return this.http.delete(this.globals.SERVERADDRESS+'deleteArticle/' + articleId);
  }

} 