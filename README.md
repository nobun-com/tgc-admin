# tgc-admin

1) To change pointing of api from local to server or vice versa .
Uncomment line no 6 and comment line no 7 in
tgc-admin/ng/src/app/common/global.ts

2) Install latest version of npm and node.
E.g. npm version 5.3.0, node version 7.9.0 (or above)
$ sudo npm install -g npm@latest
$ npm --version
$ node --version

3) Install angular-cli version 1.0.0-beta.32.3
https://www.npmjs.com/package/@angular/cli
$ sudo npm install -g @angular/cli@1.0.0-beta.32.3

4) go to folder /tgc-admin/ng
$ cd tgc-admin/ng

5) Run npm install
$ npm install
Please watch build is successful

* You may need to install any missing dependencies
$ sudo npm install @swimlane/ngx-charts
$ sudo npm install ng2-smart-table
$ sudo npm install ngx-bootstrap
$ sudo npm install ng2-cookies

6) Start ng server
$ ng serve

7) Make sure that tgc-server is running.

8) Navigate to "http://localhost:4200/"
The app will automatically reload if you change any of the source files.

default admin credentials
username : admin@tgc.com
password : admin123#



# uninstall and reinstall if needed
1) Delete "node_modules" folder from tgc-admin/ng location

2) Uninstall previous CLI using below commands
$ npm uninstall -g @angular/cli
$ npm clean cache --force

3) Reinstall @angular/cli@1.0.0-beta.32.3
$ npm install -g @angular/cli@1.0.0-beta.32.3
$ npm install 
$ ng serve --host 0.0.0.0
