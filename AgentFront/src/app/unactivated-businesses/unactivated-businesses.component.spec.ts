import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnactivatedBusinessesComponent } from './unactivated-businesses.component';

describe('UnactivatedBusinessesComponent', () => {
  let component: UnactivatedBusinessesComponent;
  let fixture: ComponentFixture<UnactivatedBusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnactivatedBusinessesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnactivatedBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
