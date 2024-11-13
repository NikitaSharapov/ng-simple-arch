import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CharacterService } from '../character.service';
import {
  Character,
  RawCharacterResponse,
} from '../../../models/character.model';

// Реализация сервиса персонажей рика и морти
@Injectable()
export class RickAndMortyCharacterService implements CharacterService {
  constructor(private httpClient: HttpClient) {}

  public getCharacters(): Observable<Array<Character>> {
    return this.httpClient
      .get<RawCharacterResponse>('https://rickandmortyapi.com/api/character')
      .pipe(map((rawCharacterResponse) => rawCharacterResponse.results));
  }
}
