import { Injectable } from '@angular/core';
import albums from '../fetchData/albums.json';

export interface Card {
  album: string,
  tracks: string[],
  color?: string,
  coverURL?: string,
  released: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cards: Card[] = albums;

  constructor() { }
}
