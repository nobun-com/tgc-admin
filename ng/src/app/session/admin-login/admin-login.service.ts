import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from "rxjs/Rx";
import { Globals } from '../../common/globals';
import 'rxjs/add/operator/map'

@Injectable()
export class AdminLoginService {
    public token: string;
    public user : any;
  

    constructor(private http: Http,private globals : Globals) {
        // set token if saved in local storage
        //var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var currentUser = JSON.parse(Cookie.get('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(admin): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.globals.SERVERADDRESS+'adminLogin', admin, options ).map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                admin = response.json() && response.json().admin;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    //localStorage.setItem('currentUser', JSON.stringify({ username: user.userName, token: token }));
                    Cookie.set('currentUser', JSON.stringify({ username: admin.email, token: token }));    
                    Cookie.set('role', 'admin');    
                    Cookie.set('userId', admin.id);    
                    
                    
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        //localStorage.removeItem('currentUser');
        Cookie.delete('currentUser');
        Cookie.delete('role');
        Cookie.delete('userId');    
    }   
    getUsers(): Observable<any> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get(this.globals.SERVERADDRESS+'getUsers', options)
            .map((response: Response) => response.json());
    }
}