import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionBrochureComponent } from './fashion-brochure.component';

describe('FashionBrochureComponent', () => {
  let component: FashionBrochureComponent;
  let fixture: ComponentFixture<FashionBrochureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionBrochureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
