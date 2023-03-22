import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormComponent } from './course-form.component';
import { MaterialModule } from '../../../material.module';
import { CourseService } from '../../services/course.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesRoutingModule } from '../../courses-routing.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../../../users/services/users.service';
import { StoreModule } from '@ngrx/store';
import { courseStateFeatureKey } from '../../state/course-state.reducer';
import { reducer } from '../../../authentication/state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CourseStateEffects } from '../../state/course-state.effects';

describe('CourseFormComponent', () => {
  let component: CourseFormComponent;
  let fixture: ComponentFixture<CourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseFormComponent ],
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

    fixture = TestBed.createComponent(CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
