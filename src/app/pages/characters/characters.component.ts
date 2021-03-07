import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from '../../api/characters/characters-api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  name: string = "";
  page: number = 1;
  totalRecords: number;

  constructor(private characterSvc: CharactersApiService) { }
  allCharacters: any[];
  FilterForm: FormGroup;

  ngOnInit() {
    this.FilterForm = new FormGroup({
      name: new FormControl(null)
    });
    this.filter();
  }

  filter() {
    const name = this.FilterForm.get('name').value;

    if (name != undefined && name != "")
      this.getByName(name);
    else
      this.getCharacters();
  }

  getCharacters() {
    this.characterSvc.getAllCharacters().subscribe((data) => {
      this.allCharacters = data;
      this.totalRecords = data.length;
    })
  }

  getByName(name: string) {
    this.characterSvc.getByCharacterName(name).subscribe((data) => {
      this.allCharacters = data;
      this.totalRecords = data.length;
    })
  }

  handlePageChange(event) {
    this.page = event;
  }
}
