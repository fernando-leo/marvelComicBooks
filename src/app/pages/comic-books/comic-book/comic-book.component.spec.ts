import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicBookComponent } from './comic-book.component';

describe('ComicBookComponent', () => {
  let component: ComicBookComponent;
  let fixture: ComponentFixture<ComicBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicBookComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicBookComponent);
    component = fixture.componentInstance;
    let MockHQ = {
      title: 'Vingadores',
      description: 'Os vingadores lutam contra Thanos, que está tentando juntar as joias do infinito',
      thumbnail: { path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350', extension: 'jpg' },
      urls: [{ url: 'http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=25cad3a7b66b49ab0c1874ffcd632de5' }]
    };

    component.comic = MockHQ;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
