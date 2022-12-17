import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-fashion-brochure',
  templateUrl: './fashion-brochure.component.html',
  styleUrls: ['./fashion-brochure.component.scss']
})
export class FashionBrochureComponent implements OnInit {
products=[
  '../../../assets/a2.jpg',
  '../../../assets/a1.jpg',
  '../../../assets/a2.jpg',
];
responsiveOptions;
  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}
headerImageSlider: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
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
  nav: false,
};
  
mostVisitedOutfits: OwlOptions = {
  loop: false,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  margin: 15,
  navSpeed: 700,
  navText: [
    '<i class="pi pi-chevron-left"></i>',
    '<i class="pi pi-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    740: {
      items: 3,
    },
    940: {
      items: 3,
    },
  },
  nav: true,
};


images = [
  '../../../assets/horizontal.jpg',
  '../../../assets/a1.jpg',
  '../../../assets/a2.jpg',
  '../../../assets/a4.webp',
  '../../../assets/a5.jfif',
];
  
  ngOnInit(): void {
  }

}
