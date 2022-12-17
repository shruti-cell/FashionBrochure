import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenOutfitsComponent } from './women-outfits.component';

describe('WomenOutfitsComponent', () => {
  let component: WomenOutfitsComponent;
  let fixture: ComponentFixture<WomenOutfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenOutfitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenOutfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
