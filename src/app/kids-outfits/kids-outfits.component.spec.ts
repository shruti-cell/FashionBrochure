import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsOutfitsComponent } from './kids-outfits.component';

describe('KidsOutfitsComponent', () => {
  let component: KidsOutfitsComponent;
  let fixture: ComponentFixture<KidsOutfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsOutfitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsOutfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
