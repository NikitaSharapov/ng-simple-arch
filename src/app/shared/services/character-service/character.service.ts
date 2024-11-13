import { Observable } from 'rxjs';

import { Character } from '../../models/character.model';

// Абстрактный класс описывающий то, как должен выглядеть сервис персонажей
export abstract class CharacterService {
  public abstract getCharacters(): Observable<Array<Character>>;
}
