import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsItemComponent } from './actors-item.component';

describe('ActorsItemComponent', () => {
  let component: ActorsItemComponent;
  let fixture: ComponentFixture<ActorsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
