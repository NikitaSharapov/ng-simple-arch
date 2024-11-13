import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { CharacterService } from '../../shared/services/character-service/character.service';
import { RickAndMortyCharacterService } from '../../shared/services/character-service/implementations/rick-and-morty-character.service';
import { Character } from '../../shared/models/character.model';

// Контроллер
@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, NgFor,MatGridListModule,MatCardModule,MatButtonModule],
  providers: [
    { provide: CharacterService, useClass: RickAndMortyCharacterService },
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent implements OnInit {
  protected characters$!: Observable<Array<Character>>;

  constructor(private readonly characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters$ = this.characterService.getCharacters();
  }
}
