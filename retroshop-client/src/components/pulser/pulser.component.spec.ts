import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulserComponent } from './pulser.component';

describe('PulserComponent', () => {
  let component: PulserComponent;
  let fixture: ComponentFixture<PulserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
