import { Component, OnInit,Input, ChangeDetectionStrategy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from "rxjs/Rx";
import { ClassesService } from './create-classes.service';
import { TeacherListService } from '../teacher-list/teacher-list.service';
import { ClassListService } from '../classes-list/classes-list.service';
import { CentersListService } from '../centers-list/centers-list.service';
import { ExtraValidators } from './extraValidators.component';


@Component({
  selector: 'edit-classes',
  templateUrl: './create-classes.component.html' ,
  styleUrls: ['./create-classes.component.scss']
})
export class EditClassesComponent {

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
   metaData : any;
   submitAttempt : boolean =false;

  
// Center CURD Operation  
  constructor(private fb: FormBuilder,private activatedRoute: ActivatedRoute,private _teacherListService: TeacherListService,private _classService: ClassesService,private _classListService: ClassListService,private _router :Router, private _centerService: CentersListService) {
     this.title = "Update Class";
     this.week = {};
     this.weektime = {};
     this.frequencyMetadata = {
       daily:{}
     }
     this.classes={
       className:'',
       teacherId : '',
       startDate : '',
       endDate : '',
       occurrence : '',
       fee:0,
       about:'',
       minAge:0,
       maxAge:0,
       maxSlots:0
     }
   }
 public form: FormGroup;


ngOnInit() {
   this.occurrences = Array(50).fill('');
   this.miniutes = [0,15,30,45];
   this.hours = Array(25).fill('');
   this.getTeachers();
   this.getCenters();


    this.activatedRoute.params.subscribe((params: Params) => {
        let classId = params['id'];
          this.getClass(classId);
      });


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
    
    saturEndTimeHH: '',
    saturEndTimeMM: '',
    saturStartTimeHH:'',
    saturStartTimeMM:'',
    
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
        console.log(data);
        this.teachers = data;
    },
      err => { console.log("error") }
    );
}

createClasses() {
   if(this.schedule != "Daily"){
      this.obj = {};
      this.obj.weekly={};
      if(this.week.monday){
        this.obj.weekly = {
           Mon:{
             startTime: (this.weektime.monStartTimeHH * 60) + this.weektime.monStartTimeMM ,
             endTime: (this.weektime.monEndTimeHH * 60) +  this.weektime.monEndTimeMM
           }
        }
      }

      if(this.week.tuesday){
        this.obj.weekly = {
           Tue:{
             startTime: (this.weektime.tueStartTimeHH * 60) + this.weektime.tueStartTimeMM ,
             endTime: (this.weektime.tueEndTimeHH * 60) +  this.weektime.tueEndTimeMM
           }
        }
      }

      if(this.week.wednesday){
        this.obj.weekly = {
           Wed:{
             startTime: (this.weektime.wedStartTimeHH * 60) + this.weektime.wedStartTimeMM ,
             endTime: (this.weektime.wedEndTimeHH * 60) +  this.weektime.wedEndTimeMM
           }
        }
      }

      if(this.week.thursday){
        this.obj.weekly = {
           Thurs:{
              startTime: (this.weektime.thurStartTimeHH * 60) + this.weektime.thurStartTimeMM ,
             endTime: (this.weektime.thurEndTimeHH * 60) +  this.weektime.thurEndTimeMM
           }
        }
      }

      if(this.week.friday){
        this.obj.weekly = {
           Fri:{
              startTime: (this.weektime.friStartTimeHH * 60) + this.weektime.friStartTimeMM ,
             endTime: (this.weektime.friEndTimeHH * 60) +  this.weektime.friEndTimeMM
           }
        }
      }

      if(this.week.saturday){
        this.obj.weekly = {
           Satur:{
              startTime: (this.weektime.satStartTimeHH * 60) + this.weektime.satStartTimeMM ,
             endTime: (this.weektime.satEndTimeHH * 60) +  this.weektime.satEndTimeMM
           }
        }
      }

      if(this.week.sunday){
        this.obj.weekly = {
           Sun:{
              startTime: (this.weektime.sunStartTimeHH * 60) + this.weektime.sunStartTimeMM ,
              endTime: (this.weektime.sunEndTimeHH * 60) +  this.weektime.sunEndTimeMM
           }
        }
      }
      this.classes.frequency = "Weekly";
      this.classes.frequencyMetadata = JSON.stringify(this.obj);
   }else{
     this.classes.frequency = "Daily";
      this.frequencyMetadata.daily={
              startTime: (this.frequencyMetadata.daily.StartTimeHH * 60) + this.frequencyMetadata.daily.StartTimeMM ,
              endTime: (this.frequencyMetadata.daily.EndTimeHH * 60) +  this.frequencyMetadata.daily.EndTimeMM
           }
     //this.classes.frequencyMetadata = JSON.stringify(this.frequencyMetadata); 
   }

   console.log(this.classes);

  
}
 
 countAboutChars() {
    this.aboutCharLeft = 300 - this.classes.about.length;
  }

  getClass(classId){
  this._classService.getById(classId).subscribe(
      data=>{
        console.log("class=",data);
        this.classes = data;

        if(this.classes.endDateType == 'endDateType')
        {
          this.classes.endDateType='endDate';
        }else{
          this.classes.endDateType='occurance';
        }
        
        this.metaData = JSON.parse(data.frequencyMetadata);
        
        if(this.classes.frequency=='Weekly'){
           this.schedule='Weekly';
           if(this.metaData.weekly.Mon){
              this.week.monday=true;
              this.weektime.monStartTimeHH =  Math.floor(this.metaData.weekly.Mon.startTime / 60);
              this.weektime.monStartTimeMM =  this.metaData.weekly.Mon.startTime % 60;
              this.weektime.monEndTimeHH =  Math.floor(this.metaData.weekly.Mon.endTime / 60);
              this.weektime.monEndTimeMM =  this.metaData.weekly.Mon.endTime % 60;
           }
           if(this.metaData.weekly.Tue){
              this.week.tuesday=true;
              this.weektime.tueStartTimeHH =  Math.floor(this.metaData.weekly.Tue.startTime / 60);
              this.weektime.tueStartTimeMM =  this.metaData.weekly.Tue.startTime % 60;
              this.weektime.tueEndTimeHH =  Math.floor(this.metaData.weekly.Tue.endTime / 60);
              this.weektime.tueEndTimeMM =  this.metaData.weekly.Tue.endTime % 60;
           }
           if(this.metaData.weekly.Wed){
              this.week.wednesday=true;
              this.weektime.wedStartTimeHH =  Math.floor(this.metaData.weekly.Wed.startTime / 60);
              this.weektime.wedStartTimeMM =  this.metaData.weekly.Wed.startTime % 60;
              this.weektime.wedEndTimeHH =  Math.floor(this.metaData.weekly.Wed.endTime / 60);
              this.weektime.wedEndTimeMM =  this.metaData.weekly.Wed.endTime % 60;
           }
           if(this.metaData.weekly.Thu){
              this.week.thursday=true;
              this.weektime.thurStartTimeHH =  Math.floor(this.metaData.weekly.Thu.startTime / 60);
              this.weektime.thurStartTimeMM =  this.metaData.weekly.Thu.startTime % 60;
              this.weektime.thurEndTimeHH =  Math.floor(this.metaData.weekly.Thu.endTime / 60);
              this.weektime.thurEndTimeMM =  this.metaData.weekly.Thu.endTime % 60;
           } 

           if(this.metaData.weekly.Fri){
              this.week.friday=true;
              this.weektime.friStartTimeHH =  Math.floor(this.metaData.weekly.Fri.startTime / 60);
              this.weektime.friStartTimeMM =  this.metaData.weekly.Fri.startTime % 60;
              this.weektime.friEndTimeHH =  Math.floor(this.metaData.weekly.Fri.endTime / 60);
              this.weektime.friEndTimeMM =  this.metaData.weekly.Fri.endTime % 60;
           } 
           if(this.metaData.weekly.Sat){
              this.week.saturday=true;
              this.weektime.satStartTimeHH =  Math.floor(this.metaData.weekly.Sat.startTime / 60);
              this.weektime.satStartTimeMM =  this.metaData.weekly.Sat.startTime % 60;
              this.weektime.satEndTimeHH =  Math.floor(this.metaData.weekly.Sat.endTime / 60);
              this.weektime.satEndTimeMM =  this.metaData.weekly.Sat.endTime % 60;
           } 
            if(this.metaData.weekly.Sun){
              this.week.sunday=true;
              this.weektime.sunStartTimeHH =  Math.floor(this.metaData.weekly.Sun.startTime / 60);
              this.weektime.sunStartTimeMM =  this.metaData.weekly.Sun.startTime % 60;
              this.weektime.sunEndTimeHH =  Math.floor(this.metaData.weekly.Sun.endTime / 60);
              this.weektime.sunEndTimeMM =  this.metaData.weekly.Sun.endTime % 60;
           } 
        }else{
           this.schedule='Daily';
           this.frequencyMetadata.daily.startTimeHH = Math.floor(this.metaData.daily.startTime / 60);
           this.frequencyMetadata.daily.startTimeMM = this.metaData.daily.startTime % 60;
           this.frequencyMetadata.daily.endTimeHH = Math.floor(this.metaData.daily.endTime / 60);
           this.frequencyMetadata.daily.endTimeMM = this.metaData.daily.endTime % 60;
        }
      },
      err =>{
        console.log("error")
      }
  )
}
backToClassList(){
  this._router.navigate(['/htmls/class-list']);
}


validateForm(classes,isValid){
  this.submitAttempt = true;
  if(isValid){
      console.log("form valid");
   }else{
     console.log("class name",classes.className);
    console.log("form not valid");
  }

}
 }