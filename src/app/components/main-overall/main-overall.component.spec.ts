import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOverallComponent } from './main-overall.component';

describe('MainOverallComponent', () => {
  let component: MainOverallComponent;
  let fixture: ComponentFixture<MainOverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainOverallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
