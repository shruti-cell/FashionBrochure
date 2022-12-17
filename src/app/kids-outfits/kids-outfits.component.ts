import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-kids-outfits',
  templateUrl: './kids-outfits.component.html',
  styleUrls: ['./kids-outfits.component.scss']
})
export class KidsOutfitsComponent implements OnInit {
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
    '../../../assets/k1.png',
    '../../../assets/k2.jpg',
    '../../../assets/k3.jpg',
    '../../../assets/k4.jpg',
    '../../../assets/k5.jpg',
    '../../../assets/k6.jpg',
    '../../../assets/k7.jpg',
    '../../../assets/k8.jpg',
    '../../../assets/k9.jpg',

  ];
}
