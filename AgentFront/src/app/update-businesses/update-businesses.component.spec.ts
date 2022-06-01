import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusinessesComponent } from './update-businesses.component';

describe('UpdateBusinessesComponent', () => {
  let component: UpdateBusinessesComponent;
  let fixture: ComponentFixture<UpdateBusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBusinessesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
