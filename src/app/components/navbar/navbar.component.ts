import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = 'https://dersa.com.co/wp-content/uploads/2020/05/marca-dersa.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
