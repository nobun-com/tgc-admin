import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { ClassesService } from './create-classes.service';
import { TeacherListService } from '../teacher-list/teacher-list.service';
import { CentersListService } from '../centers-list/centers-list.service';
import { ExtraValidators } from './extraValidators.component';



@Component({
  selector: 'create-classes',
  templateUrl: './create-classes.component.html' ,
  styleUrls: ['./create-classes.component.scss']
})
export class CreateClassesComponent implements OnInit{

   classes : any;
   center_error:Boolean = false;
   title: string;
   teachers : any;
   occurrences : any;
   centers: any;
   hrs: any;
   mins: any;
   week: any;
   weektime: any;
   schedule:any;
   obj:any;
   frequencyMetadata:any;
   miniutes : any;
   hours : any;
   aboutCharLeft : any;
   submitAttempt : boolean =false;
  
// Center CURD Operation  
  constructor(private fb: FormBuilder,private _teacherListService: TeacherListService,private _classesService: ClassesService,private _router :Router, private _centerService: CentersListService) {
     this.title = "Create New Class";
     this.week = {};
     this.weektime = {};
     this.frequencyMetadata = {
       daily:{

       }
     }
     this.classes={
       className:'',
       teacherId : '',
       startDate : '',
       endDate : '',
       endDateType : '',
       occurrence : '',
       fee:'',
       about:'',
       minAge:'',
       maxAge:'',
       maxSlots:''
     }
   }


 public form: FormGroup;
  ngOnInit() {

   this.occurrences = Array(50).fill('');
   this.miniutes = [0,15,30,45];
   this.hours = Array(25).fill('');
   this.getTeachers();
   this.getCenters();

    this.form = this.fb.group({
       className:['',Validators.required],
       teacherId : ['', Validators.required],
       centerId : ['', Validators.required],
       minAge:['',Validators.required],
       maxAge:['', Validators.required],
       maxSlots:['', Validators.required],
       fees:['', Validators.required],
       startDate : ['',Validators.required],
       endDateType :  ['', Validators.required],
       endDate : ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.endDateType.value === 'endDate',
                Validators.required
            ),])],
       occurrence :  ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.endDateType.value !== 'endDate',
                Validators.required
            ),])],
       schedule :  [null, Validators.required],
       startTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value === 'Daily',
                Validators.required
            ),])],
       startTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value === 'Daily',
                Validators.required
            ),])],
       endTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value === 'Daily',
                Validators.required
            ),])],
       endTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value === 'Daily',
                Validators.required
            ),])],

      monday: ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value !== 'Daily',
                Validators.required
            ),])],
      monEndTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.monday.value === true,
                Validators.required
            ),])],
      monEndTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.monday.value === true,
                Validators.required
            ),])],
      monStartTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.monday.value === true,
                Validators.required
            ),])],
      monStartTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.monday.value === true,
                Validators.required
            ),])],

      tuesday: ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value !== 'Daily',
                Validators.required
            ),])],
      tueEndTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.tuesday.value === true,
                Validators.required
            ),])],
      tueEndTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.tuesday.value === true,
                Validators.required
            ),])],
      tueStartTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.tuesday.value === true,
                Validators.required
            ),])],
      tueStartTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.tuesday.value === true,
                Validators.required
            ),])],

      wednesday: ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value !== 'Daily',
                Validators.required
            ),])],
      wedEndTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.wednesday.value === true,
                Validators.required
            ),])],
      wedEndTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.wednesday.value === true,
                Validators.required
            ),])],
      wedStartTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.wednesday.value === true,
                Validators.required
            ),])],
      wedStartTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.wednesday.value === true,
                Validators.required
            ),])],

      thursday: ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value !== 'Daily',
                Validators.required
            ),])],
      thurEndTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.thursday.value === true,
                Validators.required
            ),])],
      thurEndTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.thursday.value === true,
                Validators.required
            ),])],
      thurStartTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.thursday.value === true,
                Validators.required
            ),])],
      thurStartTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.thursday.value === true,
                Validators.required
            ),])],
      
      friday: ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value !== 'Daily',
                Validators.required
            ),])],
      friEndTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.friday.value === true,
                Validators.required
            ),])],
      friEndTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.friday.value === true,
                Validators.required
            ),])],
      friStartTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.friday.value === true,
                Validators.required
            ),])],
      friStartTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.friday.value === true,
                Validators.required
            ),])],
    
      saturday: ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value !== 'Daily',
                Validators.required
            ),])],
      satEndTimeHH: ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.saturday.value === true,
                Validators.required
            ),])],
      satEndTimeMM: ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.saturday.value === true,
                Validators.required
            ),])],
      satStartTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.saturday.value === true,
                Validators.required
            ),])],
      satStartTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.saturday.value === true,
                Validators.required
            ),])],
      
      sunday: ['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.schedule.value !== 'Daily',
                Validators.required
            ),])],
      sunEndTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.sunday.value === true,
                Validators.required
            ),])],
      sunEndTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.sunday.value === true,
                Validators.required
            ),])],
      sunStartTimeHH:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.sunday.value === true,
                Validators.required
            ),])],
      sunStartTimeMM:['',
        Validators.compose([
            ExtraValidators.conditional(
                group => group.controls.sunday.value === true,
                Validators.required
            ),])],
       about:[],
      
    });
  }

occAndEndDate(datetype){
  if(datetype == 'endDate')
   this.classes.occurrence = null;
   else
   this.classes.endDate = null;
}

DailyOrWeek(dailyOrweekly){
   if(dailyOrweekly == 'Daily')
    this.clearWeek();
    else
      this.classes.frequencyMetadata={
         daily:{
           startDate:null,
           endDate:null
         }
      }
}

clearWeek(){
  this.week = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  }

  this.weektime = {
    sunEndTimeHH:'',
    sunEndTimeMM:'',
    sunStartTimeHH:'',
    sunStartTimeMM:'',
    
    satEndTimeHH: '',
    satEndTimeMM: '',
    satStartTimeHH:'',
    satStartTimeMM:'',
    
    friEndTimeHH:'',
    friEndTimeMM:'',
    friStartTimeHH:'',
    friStartTimeMM:'',
  
    thurEndTimeHH:'',
    thurEndTimeMM:'',
    thurStartTimeHH:'',
    thurStartTimeMM:'',
 
    wedEndTimeHH:'',
    wedEndTimeMM:'',
    wedStartTimeHH:'',
    wedStartTimeMM:'',


    tueEndTimeHH:'',
    tueEndTimeMM:'',
    tueStartTimeHH:'',
    tueStartTimeMM:'',

    monEndTimeHH:'',
    monEndTimeMM:'',
    monStartTimeHH:'',
    monStartTimeMM:''
  }
}

getCenters(){
  this._centerService.getCenters().subscribe(
      data => { 
        console.log(data);
        this.centers = data;
    },
      err => { console.log("error") }
  );
}


getTeachers() {
    this._teacherListService.getTeachers().subscribe(
      data => { 
        this.teachers = data;
    },
      err => { console.log("error") }
    );
}

validateForm(classes,isValid){
  this.submitAttempt = true;
  if(isValid){
      this.createClasses();
      console.log("form valid");
   }else{
     console.log("class name",classes.className);
    console.log("form not valid");
  }

}

createClasses() {
    if(this.schedule != "Daily"){
      this.obj = {};
      this.obj.weekly={};
      if(this.week.monday){
        this.obj.weekly.Mon = {
             startTime: (this.weektime.monStartTimeHH * 60) + this.weektime.monStartTimeMM ,
             endTime: (this.weektime.monEndTimeHH * 60) +  this.weektime.monEndTimeMM
           }
        }
      

      if(this.week.tuesday){
        this.obj.weekly.Tue = {
             startTime: (this.weektime.tueStartTimeHH * 60) + this.weektime.tueStartTimeMM ,
             endTime: (this.weektime.tueEndTimeHH * 60) +  this.weektime.tueEndTimeMM
           }
        }
      

      if(this.week.wednesday){
        this.obj.weekly.Wed={
             startTime: (this.weektime.wedStartTimeHH * 60) + this.weektime.wedStartTimeMM ,
             endTime: (this.weektime.wedEndTimeHH * 60) +  this.weektime.wedEndTimeMM
           }
        }
      

      if(this.week.thursday){
        this.obj.weekly.Thu={
              startTime: (this.weektime.thurStartTimeHH * 60) + this.weektime.thurStartTimeMM ,
             endTime: (this.weektime.thurEndTimeHH * 60) +  this.weektime.thurEndTimeMM
           }
        }

      if(this.week.friday){
        this.obj.weekly.Fri={
              startTime: (this.weektime.friStartTimeHH * 60) + this.weektime.friStartTimeMM ,
             endTime: (this.weektime.friEndTimeHH * 60) +  this.weektime.friEndTimeMM
           }
        }

      if(this.week.saturday){
        this.obj.weekly.Sat={
              startTime: (this.weektime.satStartTimeHH * 60) + this.weektime.satStartTimeMM ,
             endTime: (this.weektime.satEndTimeHH * 60) +  this.weektime.satEndTimeMM
           }
        }

      if(this.week.sunday){
        this.obj.weekly.Sun={
              startTime: (this.weektime.sunStartTimeHH * 60) + this.weektime.sunStartTimeMM ,
              endTime: (this.weektime.sunEndTimeHH * 60) +  this.weektime.sunEndTimeMM
           }
        }
      
      this.classes.frequency = "Weekly";
      this.classes.frequencyMetadata = JSON.stringify(this.obj);
   }else{
      this.obj = {};
      this.obj.daily={};
     this.classes.frequency = "Daily";
      this.obj.daily = { 
              startTime: (this.frequencyMetadata.daily.startTimeHH * 60) + this.frequencyMetadata.daily.startTimeMM ,
              endTime: (this.frequencyMetadata.daily.endTimeHH * 60) +  this.frequencyMetadata.daily.endTimeMM
           }
     this.classes.frequencyMetadata = JSON.stringify(this.obj); 
   }


   this._classesService.createClasses(this.classes).subscribe(
      data => { 
        this._router.navigate(['/htmls/class-list']);
         return true; 
    },
      err => { console.log("error") }
    );
 
  
}
 
 countAboutChars() {
    this.aboutCharLeft = 300 - this.classes.about.length;
  }

  backToClassList(){
  this._router.navigate(['/htmls/class-list']);
}

 }