import { DataService } from './../data.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  userModel: User = new User();
  pass2: string;
  passMatchError = false;

  constructor(private dataSrv: DataService) {

    console.log('constructor of register user');
   }

  ngOnInit() {
    console.log('register user initalized');
  }

  save() {
 
  this.dataSrv.addUser(this.userModel);

  // clear the input form
  this.userModel = new User();
  this.pass2 = '';
  console.log(this.dataSrv.getAllUsers());

  }
  }

