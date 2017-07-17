import { Component,OnInit } from '@angular/core';
import { TeacherListService } from './teacher-list.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-table-paging',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent {
  rows = [];

  constructor(private _teacherListService: TeacherListService,private _router :Router) {
   
  }


ngOnInit() {
    this.getTeachers();
  }
  
getTeachers() {
    this._teacherListService.getTeachers().subscribe(
      data => { 
        this.rows = data;
      },
      err => { console.log("error") }
    );
  }


   editTeacher(teacher) {   
     this._router.navigate(['/teacher/edit-teacher',teacher.id]);
  }

  createTeacher(){
    this._router.navigate(['/teacher/teacher']);
  }
 
  deleteTeacher(teacher) {
    if (confirm("Are you sure you want to delete " + teacher.firstName + "?")) {
      this._teacherListService.deleteTeacher(teacher.id).subscribe(
         data => {
           this.getTeachers();
           return true;
         },
         error => {
           console.error("error");
         }
      );
    }
  } 
}
