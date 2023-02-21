import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { NameSurnamePipe } from './pipes/name-surname.pipe';
import { TitleStyleDirective } from './directives/title-style.directive';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { StudentsModule } from './students/students.module';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './core/components/home/home.component';
import { CoreModule } from './core/components/core.module';
import { CoursesModule } from './courses/courses.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StudentsModule,
    CoursesModule,
    SharedModule,
    CoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
