import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvelComicBooks';
  @Input() showHQs: boolean = true;
  @Input() showCharacters: boolean = false;

  ShowHQs() {
    this.showCharacters = false;
    this.showHQs = true;
  }

  ShowCharacters() {
    this.showCharacters = true;
    this.showHQs = false;
  }

}
