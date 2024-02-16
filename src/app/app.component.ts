import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, computed,
  DoCheck, effect, EffectRef,
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

    derivedCounter = computed(() => {
      const counter = this.counter();

      return counter * 10;
    });

    effectRef: EffectRef;
    constructor() {

      this.effectRef = effect((onCleanup) => {

        onCleanup(() => {

          console.log(`Cleanup occurred`);

        })

        const counterValue = this.counter();

        const derivedCounterValue = this.derivedCounter();

        console.log(` counter: ${counterValue} derived counter: ${derivedCounterValue} `);

      }, {
        manualCleanup: true
      });
    }

    increment() {
      this.counter.update(value => value + 1);
    }

  onCleanup() {
    this.effectRef.destroy();
  }
}
