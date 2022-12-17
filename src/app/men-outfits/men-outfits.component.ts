import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-men-outfits',
  templateUrl: './men-outfits.component.html',
  styleUrls: ['./men-outfits.component.scss']
})
export class MenOutfitsComponent implements OnInit {
  headerImageSlider: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    autoplay:true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
  constructor() { }

  ngOnInit(): void {
  }
  images = [
    '../../../assets/m1.jpg',
    '../../../assets/m2.jpg',
    '../../../assets/m3.jpg',
    '../../../assets/m4.jpg',
    '../../../assets/m5.jpg',
    '../../../assets/m6.jpg',
  ];
}
