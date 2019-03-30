import { User } from './../user';
import { DataService } from './../data.service';
import { SharedService } from '../shared.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {

  // variables to hold the input variables
  email = '';
  password = '';
  listUsers: User[] = [];
  validCredentials = null;
  // successState = this.shared.successState;
  

  constructor(public dataSrv: DataService, public shared: SharedService) {
    this.listUsers = dataSrv.getAllUsers();
  }

  ngOnInit() {
    console.log(this.shared.isUserLogged);
  }

  btnLogin() {

      this.validCredentials = false;

      console.log('login button clicked ', this.email, this.password);
      console.log('list of current users', this.listUsers);
      for ( let i = 0; i < this.listUsers.length; i++) {
      let savedUser = this.listUsers[i];

      if (savedUser.email === this.email && savedUser.password === this.password) {
        console.log('User is logged in!');
        this.validCredentials = true;
        this.shared.isUserLogged = true;
        this.shared.loggedUser = savedUser;
        this.email = '';
        this.password = '';

        this.shared.successState = true;
      }
    }
  }


}
