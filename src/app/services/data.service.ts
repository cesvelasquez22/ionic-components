import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './data.type';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly usersURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.usersURL);
  }
}
