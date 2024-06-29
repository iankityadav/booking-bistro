import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuFlag = false;
  profileFlag = false;
  constructor(private router: Router) {
    let url = this.router.config;
    console.log(url);
  }
  showMenu() {
    this.menuFlag = !this.menuFlag;
  }
  showProfileFlag() {
    this.profileFlag = !this.profileFlag;
  }
  getSelectedTab() {
    let url = this.router.url;
    console.log(url);
  }
}
