import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsRoutingModule } from '../../students-routing.module';

import { StudentListComponent } from './student-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentService } from '../../services/student.service';
import { StoreModule } from '@ngrx/store';
import { studentFeatureKey } from '../../state/student.reducer';
import { reducer } from '../../../authentication/state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentStateEffects } from '../../state/student.effects';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListComponent ],
      imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        SharedModule,
        StudentsRoutingModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(studentFeatureKey,reducer),
        EffectsModule.forRoot({}),
        EffectsModule.forFeature(StudentStateEffects)
      ],
      providers: [
        StudentService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
