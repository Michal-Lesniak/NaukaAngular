import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDetailComponent } from './one-detail.component';

describe('OneDetailComponent', () => {
  let component: OneDetailComponent;
  let fixture: ComponentFixture<OneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
