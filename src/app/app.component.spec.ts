/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import {RouterOutlet, RouterLinkWithHref} from "@angular/router";
import {routes} from "./app.routes";
import {NavComponent} from "./nav/nav.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ AppComponent, NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have router-outlet component', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });
});
