import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.term = value;
  }

}
