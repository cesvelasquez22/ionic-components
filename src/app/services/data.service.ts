import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentInterface } from '../models/component.interface';
import { Hero } from '../models/hero.interface';
import { Album, User } from './data.type';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly usersURL = 'https://jsonplaceholder.typicode.com/users';
  private readonly albumsURL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getMenuOptions() {
    return this.http.get<ComponentInterface[]>('assets/data/menu-options.json');
  }

  getHeroes() {
    return this.http.get<Hero[]>('assets/data/superheroes.json').pipe(delay(1500));
  }

  getUsers() {
    return this.http.get<User[]>(this.usersURL);
  }

  getAlbums() {
    return this.http.get<Album[]>(this.albumsURL);
  }
}
