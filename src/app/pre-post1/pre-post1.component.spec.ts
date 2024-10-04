import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePost1Component } from './pre-post1.component';

describe('PrePost1Component', () => {
  let component: PrePost1Component;
  let fixture: ComponentFixture<PrePost1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrePost1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePost1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
