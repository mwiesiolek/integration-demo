import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import {TodoService} from "./todo.service";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs";

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from server', () => {
    // dependecy from app.module, not from component->providers if defined
    let service = TestBed.get(TodoService);
    spyOn(service, 'getTodos').and.returnValue(Observable.from([ [ 1, 2, 3 ] ]));
    // get provider defined in component
    // fixture.debugElement.injector.get(TodoService)

    // calls ngoninit
    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

/*  it('should load todos from server (promise)', fakeAsync(() => {
    // dependecy from app.module, not from component->providers if defined
    let service = TestBed.get(TodoService);

    // Promise.resolve
    spyOn(service, 'getTodos').and.returnValue(Observable.from([ [ 1, 2, 3 ] ]));
    // get provider defined in component
    // fixture.debugElement.injector.get(TodoService)

    // calls ngoninit
    fixture.detectChanges();

    tick();
    expect(component.todos.length).toBe(3);
  }));*/
});
