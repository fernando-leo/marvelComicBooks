import { Component, OnInit } from '@angular/core';
import { ComicsApiService } from '../../api/comics/comics-api.service';

@Component({
  selector: 'app-comic-books',
  templateUrl: './comic-books.component.html',
  styleUrls: ['./comic-books.component.css']
})

export class ComicBooksComponent implements OnInit {
  allComics: any[];
  totalRecords: number;
  page: number = 1;
  constructor(private comicsSvc: ComicsApiService) {
    this.allComics = new Array<any>();
  }

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.comicsSvc.getAllComics().subscribe((data) => {
      this.allComics = data;
      this.totalRecords = data.length;
    })
  }

  handlePageChange(event) {
    this.page = event;
  }
}