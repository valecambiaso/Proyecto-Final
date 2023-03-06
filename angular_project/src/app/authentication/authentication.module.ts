import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class AuthenticationModule{}