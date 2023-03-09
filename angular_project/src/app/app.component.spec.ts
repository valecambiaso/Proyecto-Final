import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialAuthComponent } from './authentication/components/initial-auth/initial-auth.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { StudentsModule } from './students/students.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        MaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        StudentsModule,
        CoursesModule,
        SharedModule,
        CoreModule,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular_project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_project');
  });
}); 
