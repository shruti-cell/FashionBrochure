import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-women-outfits',
  templateUrl: './women-outfits.component.html',
  styleUrls: ['./women-outfits.component.scss']
})
export class WomenOutfitsComponent implements OnInit {
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
    '../../../assets/W1.jpg',
    '../../../assets/W2.png',
    '../../../assets/w3.jpg',
    '../../../assets/w4.jpg',
  ];
}
