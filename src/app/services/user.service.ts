import { Injectable } from '@angular/core';
export interface User{
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    { id: 1, name: 'Peter'},
    { id: 2, name: 'Sandra'},
    { id: 3, name: 'Tom'},
  ];
  constructor() { }

  getUsers():User[]{
    return this.users;
  }

  getUser(id:number): User | undefined{
    return this.users.find(user => user.id === id);
  }
}
