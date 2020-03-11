import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>(); // Generic annotation

  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.term = value;
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}

// In order to communicate from a child to a parent component, we use EventEmitter and Output. 
