import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSectionComponent } from './button-section.component';

describe('CtaButtonComponent', () => {
  let component: ButtonSectionComponent;
  let fixture: ComponentFixture<ButtonSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
