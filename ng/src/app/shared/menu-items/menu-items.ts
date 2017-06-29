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

const TEACHERMENUITEMS = [
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
    state: 'teacher-list',
    name: 'Manage Teacher',
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
  }
  // {
  //   state: 'apps',
  //   name: 'APPS',
  //   type: 'sub',
  //   icon: 'apps',
  //   badge: [
  //     {type: 'red', value: '5'}
  //   ],
  //   children: [
  //     {state: 'calendar', name: 'CALENDAR'},
  //     {state: 'media', name: 'MEDIA'},
  //     {state: 'messages', name: 'MESSAGES'},
  //     {state: 'social', name: 'SOCIAL'},
  //     {state: 'chat', name: 'CHAT'}
  //   ]
  // },
  // {
  //   state: 'widgets',
  //   name: 'WIDGETS',
  //   type: 'link',
  //   icon: 'photo'
  // },
  // {
  //   state: 'material',
  //   name: 'MATERIAL',
  //   type: 'sub',
  //   icon: 'equalizer',
  //   badge: [
  //     {type: 'purple', value: '10'}
  //   ],
  //   children: [
  //     {state: 'button', name: 'BUTTON'},
  //     {state: 'cards', name: 'CARDS'},
  //     {state: 'select', name: 'SELECT'},
  //     {state: 'autocomplete', name: 'AUTOCOMPLETE'},
  //     {state: 'datepicker', name: 'DATEPICKER'},
  //     {state: 'chips', name: 'CHIPS'},
  //     {state: 'input', name: 'INPUT'},
  //     {state: 'checkbox', name: 'CHECKBOX'},
  //     {state: 'radio', name: 'RADIO'},
  //     {state: 'toolbar', name: 'TOOLBAR'},
  //     {state: 'lists', name: 'LISTS'},
  //     {state: 'grid', name: 'GRID'},
  //     {state: 'progress', name: 'PROGRESS'},
  //     {state: 'tabs', name: 'TABS'},
  //     {state: 'switch', name: 'SWITCH'},
  //     {state: 'tooltip', name: 'TOOLTIP'},
  //     {state: 'menu', name: 'MENU'},
  //     {state: 'slider', name: 'SLIDER'},
  //     {state: 'snackbar', name: 'SNACKBAR'},
  //     {state: 'dialog', name: 'DIALOG'}
  //   ]
  // },
  // {
  //   state: 'forms',
  //   name: 'FORMS',
  //   type: 'sub',
  //   icon: 'looks_3',
  //   children: [
  //     {state: 'editor', name: 'EDITOR'},
  //     {state: 'validation', name: 'VALIDATION'},
  //     {state: 'upload', name: 'UPLOAD'},
  //     {state: 'tree', name: 'TREE'},
  //   ]
  // },
  // {
  //   state: 'tables',
  //   name: 'TABLES',
  //   type: 'sub',
  //   icon: 'format_line_spacing',
  //   badge: [
  //     {type: 'blue-grey', value: '8'
  //     }
  //   ],
  //   children: [
  //     {state: 'fullscreen', name: 'FULLSCREEN'},
  //     {state: 'editing', name: 'EDITING'},
  //     {state: 'filter', name: 'FILTER'},
  //     {state: 'paging', name: 'PAGING'},
  //     {state: 'sorting', name: 'SORTING'},
  //     {state: 'pinning', name: 'PINNING'},
  //     {state: 'selection', name: 'SELECTION'},
  //   ]
  // },
  // {
  //   state: 'ecommerce',
  //   name: 'ECOMMERCE',
  //   type: 'sub',
  //   icon: 'looks_3',
  //   badge: [
  //     {type: 'red', value: 'new'
  //     }
  //   ],
  //   children: [
  //     {state: 'products', name: 'PRODUCTS'},
  //     {state: 'compact', name: 'COMPACT'},
  //     {state: 'detail', name: 'DETAIL'},
  //   ]
  // },
  // {
  //   state: 'charts',
  //   name: 'CHARTS',
  //   type: 'link',
  //   icon: 'show_chart',
  // },
  // {
  //   state: 'maps',
  //   name: 'MAPS',
  //   type: 'sub',
  //   icon: 'navigation',
  //   children: [
  //     {state: 'google', name: 'GOOGLE'},
  //     {state: 'leaflet', name: 'LEAFLET'}
  //   ]
  // },
  // {
  //   state: 'dragndrop',
  //   name: 'DND',
  //   type: 'link',
  //   icon: 'show_chart',
  // },
  // {
  //   state: 'pages',
  //   name: 'PAGES',
  //   type: 'sub',
  //   icon: 'pages',
  //   children: [
  //     {state: 'invoice', name: 'INVOICE'},
  //     {state: 'timeline', name: 'TIMELINE'},
  //     {state: 'user', name: 'USER'},
  //     {state: 'blank', name: 'BLANK'},
  //     {state: 'pricing', name: 'PRICING'},
  //   ]
  // },
  // {
  //   state: 'session',
  //   name: 'SESSION',
  //   type: 'sub',
  //   icon: 'face',
  //   children: [
  //     {state: '404', name: '404'},
  //     {state: 'error', name: 'ERROR'},
  //     {state: 'signin', name: 'SIGNIN'},
  //     {state: 'signup', name: 'SIGNUP'},
  //     {state: 'forgot', name: 'FORGOT'},
  //     {state: 'lockscreen', name: 'LOCKSCREEN'},
  //   ]
  // },
  // {
  //   state: 'htmls',
  //   name: 'Manage',
  //   type: 'sub',
  //   icon: 'looks_3',
  //   children: [
  //     {state: 'center-list', name: 'Centers'},
  //     {state: 'teacher-list', name: 'Teachers'},
  //     {state: 'class-list', name: 'Classes'},
  //     {state: 'coupon-list', name: 'Coupons'},
  //     {state: 'article-list', name: 'Articles'}
  //   ]
  //  }
  // {
  //   state: 'http://primer.nyasha.me/docs',
  //   name: 'DOCS',
  //   type: 'extTabLink',
  //   icon: 'local_library'
  // }
];


@Injectable()
export class MenuItems {
  role : string =Cookie.get('role') 
  getAll(): Menu[] {
    if(this.role=='admin')
      return ADMINMENUITEMS;
    else
      return TEACHERMENUITEMS
  }

  add(menu: Menu) {
    if(this.role=='admin')
      ADMINMENUITEMS.push(menu);
    else
      TEACHERMENUITEMS.push(menu);
  }
}
