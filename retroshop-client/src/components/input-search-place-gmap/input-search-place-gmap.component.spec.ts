import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchPlaceGmapComponent } from './input-search-place-gmap.component';

describe('InputSearchPlaceGmapComponent', () => {
  let component: InputSearchPlaceGmapComponent;
  let fixture: ComponentFixture<InputSearchPlaceGmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSearchPlaceGmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchPlaceGmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
