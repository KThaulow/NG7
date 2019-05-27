import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Constructor
  constructor(private data: DataService) { }

  // Properties
  h1Style: boolean = false;

  firstName: string = "Liv";
  lastName: string = "Thaulow";

  users: Object;

  // Init
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

  //Methods
  firstClick() {
    console.log('Clicked');

    if (this.h1Style == false) {
      this.h1Style = true;
    }
    else {
      this.h1Style = false;
    }
  }

  secondClick() {
    this.data.secondClick();
  }
}
