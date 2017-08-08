import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

   single : any[];
   obj : any;
   role : string;
   userId : String ;
   isDataAvailable : boolean =false;
   showCenters : boolean ;
   showEducators : boolean ;

  view: any[] = [1000, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'No. Of Bookings';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // onSelect(event) {
  //   console.log(event);
  // }

  rows = [];
  activeClassesCount = 0;
  bookingsCount = 0;
  centersCount = 0;
  teachersCount = 0;

  constructor(private dashboardService : DashboardService) {
    this.obj = {
      name : '',
      value : 0
    }
    this.single=[];
  }

  ngOnInit(){
     this.role  = Cookie.get('role');
     this.userId  = Cookie.get('userId');  
     if(this.role=='admin'){
       this.showCenters = true;
       this.showEducators = true;
       this.getAdminDashboardData();
     }else{
       this.showCenters = false;
       this.showEducators = false;
       this.getEducatorDashboardData(this.userId);
     }
  }

  
  getAdminDashboardData(){
  this.dashboardService.getAdminDashBoardData().subscribe(
      data => { 
         this.activeClassesCount = data.activeClassesCount;
         this.bookingsCount = data.bookingsCount;
         this.centersCount = data.centersCount;
         this.teachersCount = data.teachersCount;
         
         for(var objectKey in data.barChartData){
           this.obj={};
           this.obj.name = objectKey+"";
           this.obj.value = data.barChartData[objectKey];
           this.single.push(this.obj);
         }
        this.isDataAvailable=true;
    },
      err => { console.log("error") }
  );
}   

  getEducatorDashboardData(id){
  this.dashboardService.getEducatorDashboardData(id).subscribe(
      data => { 
         this.activeClassesCount = data.activeClassesCount;
         this.bookingsCount = data.bookingsCount;
         for(var objectKey in data.barChartData){
           this.obj={};
           this.obj.name = objectKey+"";
           this.obj.value = data.barChartData[objectKey];
           this.single.push(this.obj);
         }
                  
         this.isDataAvailable=true;
    },
      err => { console.log("error") }
  );
}
}






