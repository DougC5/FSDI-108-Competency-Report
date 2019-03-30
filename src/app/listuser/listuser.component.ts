import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  allUsers: User[] = []; // empty array of users

  constructor(public dataService: DataService) {
    // read the data
    this.allUsers = dataService.getAllUsers();
    console.log(dataService.getAllUsers());
   }

  ngOnInit() {
  }

}
