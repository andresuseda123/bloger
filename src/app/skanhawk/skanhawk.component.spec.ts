import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkanhawkComponent } from './skanhawk.component';

describe('SkanhawkComponent', () => {
  let component: SkanhawkComponent;
  let fixture: ComponentFixture<SkanhawkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkanhawkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkanhawkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
