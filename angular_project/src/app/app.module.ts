import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameSurnamePipe } from './pipes/name-surname.pipe';
import { TitleStyleDirective } from './directives/title-style.directive';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDivider, MatDividerModule} from '@angular/material/divider';
import { StudentListComponent } from './components/student-list/student-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentFormComponent } from './components/student-form/student-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BooleanToTextPipe,
    NameSurnamePipe,
    TitleStyleDirective,
    ToolbarComponent,
    StudentListComponent,
    NavbarComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
