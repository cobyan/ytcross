import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossfaderComponent } from './crossfader.component';

describe('CrossfaderComponent', () => {
  let component: CrossfaderComponent;
  let fixture: ComponentFixture<CrossfaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossfaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossfaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
