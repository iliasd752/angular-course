import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, computed, DoCheck,
  EventEmitter, input,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../courses.service';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  imports: [
    CommonModule
  ],
  standalone: true

})
export class CourseCardComponent implements  OnInit {

    course = input<Course>();

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();




    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string) {


    }

    ngOnInit() {

    }



    onTitleChanged(newTitle: string) {

        this.course().description = newTitle;

    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course(), description});

    }


  onCourseViewed() {

  }
}
