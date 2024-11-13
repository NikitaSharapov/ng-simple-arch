import { Injectable } from '@angular/core';
import { CharacterService } from '../character.service';
import { from, Observable, of, scheduled } from 'rxjs';
import { Character } from '../../../models/character.model';

// Моковая реализация сервиса персонажей
@Injectable()
export class MockDataCharacterService implements CharacterService {
  constructor() {}
  public getCharacters(): Observable<Array<Character>> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          id: 1,
          status: 'dead',
          gender: 'male',
          image: '',
          name: 'Вася',
          origin: { name: 'Челябинск' },
          species: 'хз',
        },
      ]);
    });
  }
}
