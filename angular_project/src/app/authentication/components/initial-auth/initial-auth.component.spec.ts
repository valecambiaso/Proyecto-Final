import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialAuthComponent } from './initial-auth.component';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from '../../authentication-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('InitialAuthComponent', () => {
  let component: InitialAuthComponent;
  let fixture: ComponentFixture<InitialAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialAuthComponent ],
      imports: [
        MaterialModule,
        CommonModule,
        AuthenticationRoutingModule,
        SharedModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
