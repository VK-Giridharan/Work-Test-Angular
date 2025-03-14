import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCountComponent } from './name-count.component';

describe('NameCountComponent', () => {
  let component: NameCountComponent;
  let fixture: ComponentFixture<NameCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
