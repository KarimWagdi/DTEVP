import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  partialContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, incidunt!';
  fullContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maiores quos ipsa, quas ut amet accusantium, deserunt debitis voluptatum alias magnam? Perferendis dolor temporibus illum expedita debitis quibusdam dolore quasi suscipit ipsum, aut ut nam excepturi cumque quis nesciunt est ratione tempora impedit voluptate officiis odio ullam tempore. Qui, nulla.".';
  showFullContent = false;

  partialtext = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, incidunt!';
  fulltext = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, maiores quos ipsa, quas ut amet accusantium, deserunt debitis voluptatum alias magnam? Perferendis dolor temporibus illum expedita debitis quibusdam dolore quasi suscipit ipsum, aut ut nam excepturi cumque quis nesciunt est ratione tempora impedit voluptate officiis odio ullam tempore. Qui, nulla.".';
  showFulltext = false;

  toggleShowFullContent() {
    this.showFullContent = !this.showFullContent;
  }

  toggleShowFulltext() {
    this.showFulltext = !this.showFulltext;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
