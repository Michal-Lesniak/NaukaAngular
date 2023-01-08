import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchdataV2Component } from './fetchdata-v2.component';

describe('FetchdataV2Component', () => {
  let component: FetchdataV2Component;
  let fixture: ComponentFixture<FetchdataV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchdataV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchdataV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
