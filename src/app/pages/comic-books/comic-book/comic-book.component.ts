import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic-book',
  templateUrl: './comic-book.component.html',
  styleUrls: ['./comic-book.component.css']
})
export class ComicBookComponent implements OnInit {
  @Input()
  comic: any;

  constructor() { }

  ngOnInit(): void {
  }

}
