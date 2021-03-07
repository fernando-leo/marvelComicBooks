import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;

    let MockCharacter = {
      name: 'Thor',
      description: 'Thor é de Asgard',
      thumbnail: { path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350', extension: 'jpg' },
      urls: [{ url: 'http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=25cad3a7b66b49ab0c1874ffcd632de5' }]
    };

    component.character = MockCharacter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
