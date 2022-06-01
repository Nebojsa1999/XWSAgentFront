import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveApiComponent } from './save-api.component';

describe('SaveApiComponent', () => {
  let component: SaveApiComponent;
  let fixture: ComponentFixture<SaveApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
