import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePostComponent } from './pre-post.component';

describe('PrePostComponent', () => {
  let component: PrePostComponent;
  let fixture: ComponentFixture<PrePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrePostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
