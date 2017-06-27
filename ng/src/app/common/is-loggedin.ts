import {  Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

Injectable()
export class isLoggedin {
     function isLoggedin() {
        return !!Cookie.get('currentUser');
}
}
