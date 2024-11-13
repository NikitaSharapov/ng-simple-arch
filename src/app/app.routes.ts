import { Routes } from '@angular/router';
import { CharactersComponent } from './views/characters/characters.component';

export const routes: Routes = [{ path: 'characters', component: CharactersComponent },
    { path: '',   redirectTo: '/characters', pathMatch: 'full' }
];
