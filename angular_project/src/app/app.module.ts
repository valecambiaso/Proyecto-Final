import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { NameSurnamePipe } from './pipes/name-surname.pipe';
import { TitleStyleDirective } from './directives/title-style.directive';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentsModule } from './students/students.module';


@NgModule({
  declarations: [
    AppComponent,
    BooleanToTextPipe,
    NameSurnamePipe,
    TitleStyleDirective,
    ToolbarComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
