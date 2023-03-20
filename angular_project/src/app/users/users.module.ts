import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './services/users.service';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer, userFeatureKey } from './state/user.reducer';
import { UserStateEffects } from './state/user.effects';

@NgModule({
  declarations: [
    UsersListComponent,
    UserFormComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature(userFeatureKey, reducer),
    EffectsModule.forFeature(UserStateEffects)
  ],
  providers:[
    UsersService
  ]
})
export class UsersModule { }
