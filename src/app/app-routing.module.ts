import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicsComponent } from './pages/comics/comics.component';

const routes: Routes = [
    {
        path: '', component: ComicsComponent
    },
    {
        path: 'characters', component: CharactersComponent
    },
    {
        path: 'comics', component: ComicsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }