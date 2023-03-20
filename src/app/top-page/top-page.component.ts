import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {

  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
