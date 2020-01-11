import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersItemComponent } from './winners-item.component';

describe('WinnersItemComponent', () => {
  let component: WinnersItemComponent;
  let fixture: ComponentFixture<WinnersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
