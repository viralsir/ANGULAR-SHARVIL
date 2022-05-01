import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateiralDemoComponent } from './mateiral-demo.component';

describe('MateiralDemoComponent', () => {
  let component: MateiralDemoComponent;
  let fixture: ComponentFixture<MateiralDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateiralDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateiralDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
