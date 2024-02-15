import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, computed,
  DoCheck,
  Inject,
  Injector,
  OnInit,
  signal
} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';
import {CoursesService} from './courses/courses.service';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {CourseImageComponent} from './courses/course-image/course-image.component';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    NgForOf
  ],
  standalone: true
})
export class AppComponent {

    counter = signal(0);

    multiplier: number = 0;

    derivedCounter = computed(() => {

      const counter = this.counter();

      if (this.multiplier >= 10) {
        return counter * 10;
      }
      else {
        return 0;
      }



    });

    constructor() {

    }

    increment() {
      this.counter.update(value => value + 1);
    }

  incrementMultiplier() {
    this.multiplier++;
  }
}
