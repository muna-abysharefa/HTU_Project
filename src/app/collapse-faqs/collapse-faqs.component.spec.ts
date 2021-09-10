import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseFaqsComponent } from './collapse-faqs.component';

describe('CollapseFaqsComponent', () => {
  let component: CollapseFaqsComponent;
  let fixture: ComponentFixture<CollapseFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
