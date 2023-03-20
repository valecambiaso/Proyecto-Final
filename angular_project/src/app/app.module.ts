import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { StudentsModule } from './students/students.module';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './core/components/home/home.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './authentication/components/login/login.component';
import { InitialAuthComponent } from './authentication/components/initial-auth/initial-auth.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    InitialAuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StudentsModule,
    CoursesModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    StoreModule.forRoot({},{}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
