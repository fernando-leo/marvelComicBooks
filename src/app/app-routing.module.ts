import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicBooksComponent } from './pages/comic-books/comic-books.component';

const routes: Routes = [
    {
        path: '', component: ComicBooksComponent
    },
    {
        path: 'characters', component: CharactersComponent
    },
    {
        path: 'comics', component: ComicBooksComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }