import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isUserLogged = false;
  public successState = false;
  public loggedUser: User = new User()
;
  constructor() { }
}
