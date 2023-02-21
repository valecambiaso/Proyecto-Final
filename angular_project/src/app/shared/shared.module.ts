import { NgModule } from "@angular/core";
import { BooleanToTextPipe } from '../pipes/boolean-to-text.pipe';
import { NameSurnamePipe } from '../pipes/name-surname.pipe';
import { TitleStyleDirective } from '../directives/title-style.directive';



@NgModule({
    declarations:[
        BooleanToTextPipe,
        NameSurnamePipe,
        TitleStyleDirective,
    ],
    imports:[

    ],
    exports:[
        BooleanToTextPipe,
        NameSurnamePipe,
        TitleStyleDirective,
    ],
})
export class SharedModule{}