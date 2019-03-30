import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public users: User[] = [];

  constructor() {
    if (this.users.length === 0){

      const admin = new User();
      admin.email = 'admin@email.com';
      admin.password = '1234';
      admin.userName = 'Admin';
      admin.firstName = 'Admin';
      admin.lastName = 'Admin LN';
      this.users.push(admin);
    }
  }

    public addUser(theUser: User) {
     this.users.push(theUser);
    }

    public getAllUsers() {
      return this.users;
    }
  }

