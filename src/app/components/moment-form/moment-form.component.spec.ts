import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentFormComponent } from './moment-form.component';
import { CommonModule } from '@angular/common';

describe('MomentFormComponent', () => {
  let component: MomentFormComponent;
  let fixture: ComponentFixture<MomentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomentFormComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
