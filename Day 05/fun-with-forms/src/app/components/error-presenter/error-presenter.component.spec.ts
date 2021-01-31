import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPresenterComponent } from './error-presenter.component';

describe('ErrorPresenterComponent', () => {
  let component: ErrorPresenterComponent;
  let fixture: ComponentFixture<ErrorPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
