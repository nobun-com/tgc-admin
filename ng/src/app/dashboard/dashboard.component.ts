import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

   single : any[];
   obj : any;
   isDataAvailable : boolean =false;
  //  single: any[] = [
  //   {
  //     "name": "Germany",
  //     "value": 300
  //   },
  //   {
  //     "name": "USA",
  //     "value": 200
  //   },
  //   {
  //     "name": "France",
  //     "value": 100
  //   }
  // ];

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

  onSelect(event) {
    console.log(event);
  }

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
    this.getDashboardData();
  }

  
  getDashboardData(){
  this.dashboardService.getDashBoardData().subscribe(
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
                  
         console.log(this.single);
         this.isDataAvailable=true;
    },
      err => { console.log("error") }
  );
}
}






