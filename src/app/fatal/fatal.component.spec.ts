import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatalComponent } from './fatal.component';

describe('FatalComponent', () => {
  let component: FatalComponent;
  let fixture: ComponentFixture<FatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
