import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenOutfitsComponent } from './men-outfits.component';

describe('MenOutfitsComponent', () => {
  let component: MenOutfitsComponent;
  let fixture: ComponentFixture<MenOutfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenOutfitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenOutfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
