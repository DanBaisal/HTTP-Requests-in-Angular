import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages = []; // When the app first fires up, nothing is shown, therefore an empty array

  constructor(private wikipedia: WikipediaService) {

  }

  onTerm(term: string) {
    // const results = this.wikipedia.search(term);
    // console.log(results);

    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response;
    });
  }
}
