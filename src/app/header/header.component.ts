import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  containerMenu: any

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toggleFunction() {
    this.containerMenu = document.getElementById('containerMenu');
    this.containerMenu?.classList.toggle('openMenu');

    //changes ends here
  }
}
