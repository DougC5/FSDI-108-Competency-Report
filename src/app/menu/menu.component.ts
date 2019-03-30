import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public shared: SharedService) { }

  ngOnInit() {
  }

  logOut() {
    this.shared.isUserLogged = false;
    this.shared.successState = false;

  }

}
