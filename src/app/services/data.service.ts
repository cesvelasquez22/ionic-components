import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentInterface } from '../models/component.interface';
import { User } from './data.type';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly usersURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getMenuOptions() {
    return this.http.get<ComponentInterface[]>('assets/data/menu-options.json');
  }

  getUsers() {
    return this.http.get<User[]>(this.usersURL);
  }
}
