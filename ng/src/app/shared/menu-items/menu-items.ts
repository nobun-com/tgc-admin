import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const EDUCATORMENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'none'
  },
  {
    state: 'classes-list',
    name: 'Manage Classes',
    icon: 'none',
    type: 'link'
  },
  {
    state: 'booking-list',
    name: 'Bookings',
    icon: 'none',
    type: 'link'
  }
];
  const ADMINMENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    icon: 'none',
    type: 'link'
  },
  {
    state: 'centers-list',
    name: 'Manage Centers',
    icon: 'none',
    type: 'link'
  },
  {
    state: 'educator-list',
    name: 'Manage Educator',
    icon: 'none',
    type: 'link'
  },
  {
    state: 'classes-list',
    name: 'Manage Classes',
    icon: 'none',
    type: 'link'
  },
  {
    state: 'coupon-list',
    name: 'Manage Coupons',
    icon: 'none',
    type: 'link'
  },
  {
    state: 'article-list',
    name: 'Manage Articles',
    icon: 'none',
    type: 'link'
  },
  {
    state: 'promo-list',
    name: 'Manage Promos',
    icon: 'none',
    type: 'link'
  },
  {
    state: 'booking-list',
    name: 'Bookings',
    icon: 'none',
    type: 'link'
  }
];


@Injectable()
export class MenuItems {
  role : string;
  getAll(): Menu[] {
  this.role = Cookie.get('role'); 
    if(this.role=='admin')
      return ADMINMENUITEMS;
    else
      return EDUCATORMENUITEMS
  }

  add(menu: Menu) {
    if(this.role=='admin')
      ADMINMENUITEMS.push(menu);
    else
      EDUCATORMENUITEMS.push(menu);
  }
}
