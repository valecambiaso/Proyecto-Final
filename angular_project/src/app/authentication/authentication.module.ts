import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, reducer } from './state/auth.reducer';

@NgModule({
    declarations:[
        
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        StoreModule.forFeature(authFeatureKey, reducer)
    ]
})
export class AuthenticationModule{}