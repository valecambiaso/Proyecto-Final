import { NgModule } from "@angular/core";
import { BooleanToTextPipe } from '../pipes/boolean-to-text.pipe';
import { NameSurnamePipe } from '../pipes/name-surname.pipe';
import { TitleStyleDirective } from '../directives/title-style.directive';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations:[
        BooleanToTextPipe,
        NameSurnamePipe,
        TitleStyleDirective,
    ],
    imports:[
        ReactiveFormsModule,
    ],
    exports:[
        BooleanToTextPipe,
        NameSurnamePipe,
        TitleStyleDirective,
        ReactiveFormsModule
    ],
})
export class SharedModule{}