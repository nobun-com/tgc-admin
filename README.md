## tgc-admin

* git clone https://github.com/nobun-com/tgc-admin.git  
$ cd Apps  
$ git clone https://github.com/nobun-com/tgc-admin.git  

* To change pointing of api from local to server or vice versa  
Uncomment line #6 and comment line #7 in tgc-admin/ng/src/app/common/global.ts

* Install latest version of npm and node  
E.g. npm version 4.2.0, node version 7.9.0 (or above)  
$ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -  
$ sudo npm install -g npm@4.2.0  
$ sudo apt-get install -y nodejs  
$ npm -v  
$ node -v  

* Install angular-cli  
https://www.npmjs.com/package/@angular/cli@1.0.3  
$ sudo npm install -g @angular/cli@1.0.3  

* go to folder /tgc-admin/ng  
$ cd tgc-admin/ng

* Run npm install  
$ sudo npm install  
Please watch build is successful  

* Start ng server  
$ ng serve

* Make sure that tgc-server is running  

* Navigate to "http://localhost:4200/"  
The app will automatically reload if you change any of the source files  

    Default admin credentials  
    username : admin@tgc.com  
    password : admin123#  


## Uninstall and reinstall if needed

* Delete "node_modules" folder from tgc-admin/ng location  

* Uninstall previous CLI using below commands  
$ cd /usr/local/lib/node_modules  
$ npm uninstall -g @angular/cli  
$ npm cache clean  

* Reinstall @angular/cli@1.0.3  
$ npm install -g @angular/cli@1.0.3  
$ npm install  
$ ng serve --host 0.0.0.0  

## Install missing dependencies if needed  

* You may need to install any missing dependencies  
$ sudo npm install @swimlane/ngx-charts  
$ sudo npm install ng2-smart-table  
$ sudo npm install ngx-bootstrap  
$ sudo npm install ng2-cookies  
