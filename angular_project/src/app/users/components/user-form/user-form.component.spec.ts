import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserFormComponent } from './user-form.component';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from '../../users-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, userFeatureKey } from '../../state/user.reducer';
import { UserStateEffects } from '../../state/user.effects';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      imports:[
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        SharedModule,
        HttpClientModule,
        UsersRoutingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(userFeatureKey, reducer),
        EffectsModule.forRoot({}),
        EffectsModule.forFeature(UserStateEffects)
      ],
      providers:[
        UsersService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
