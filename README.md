# tgc-admin

1) To change pointing of api from local to server or vice versa .
Uncomment line no 6 and comment line no 7 in
tgc-admin/ng/src/app/common/global.ts

2) Install latest version of npm and node.
E.g. npm version 4.2.0, node version 6.9.5 (or above)
$ npm --version
$ node --version

3) Install angular-cli version 1.0.0-beta.32.3
https://www.npmjs.com/package/@angular/cli
$ npm install -g @angular/cli@1.0.0-beta.32.3

4) go to folder tgc-admin
   cd tgc-admin

5) Run npm install
Please watch build is successful

6) Go to folder  tgc-admin/ng/ and run below command
   ng serve

7) Make sure that tgc-server is running.

8) Navigate to "http://localhost:4200/"
The app will automatically reload if you change any of the source files.

default admin credentials
username : admin@tgc.com
password : admin123#
