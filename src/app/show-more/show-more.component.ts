import { Component, Input , OnInit  } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css']
})
export class ShowMoreComponent implements OnInit {

  @Input()
  text!: string;
  @Input()
  wordLimit!: number;
  showMore: boolean;

  constructor() {
    this.showMore = false;
   }

  ngOnInit(): void {
  }

}
