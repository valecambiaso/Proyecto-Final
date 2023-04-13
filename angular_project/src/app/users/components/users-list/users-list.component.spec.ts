import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { UsersService } from '../../services/users.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesRoutingModule } from 'src/app/courses/courses-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, userFeatureKey } from '../../state/user.reducer';
import { UserStateEffects } from '../../state/user.effects';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListComponent ],
      imports: [
        MaterialModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        CoursesRoutingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(userFeatureKey, reducer),
        EffectsModule.forRoot({}),
        EffectsModule.forFeature(UserStateEffects)
      ],
      providers: [
        UsersService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
