import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from '../../courses-routing.module';
import { CourseService } from '../../services/course.service';

import { CourseListComponent } from './course-list.component';
import { StoreModule } from '@ngrx/store';
import { courseStateFeatureKey } from '../../state/course-state.reducer';
import { reducer } from '../../../authentication/state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourseStateEffects } from '../../state/course-state.effects';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      imports:[
        MaterialModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        CoursesRoutingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(courseStateFeatureKey,reducer),
        EffectsModule.forRoot({}),
        EffectsModule.forFeature(CourseStateEffects)
      ],
      providers: [
        CourseService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
