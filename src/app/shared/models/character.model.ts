//Модель данных персонажа
export interface Character {
  id: number;
  status: string;
  name: string;
  species: string;
  gender: string;
  image: string;
  origin: CharacterOrigin,
}
//Модель данных происхождения персонажа
export interface CharacterOrigin {
  name: string;
}

//Модель даннхы персонажа полученного в ответе от сервера
export interface RawCharacterResponse {
  results: Array<Character>;
}
