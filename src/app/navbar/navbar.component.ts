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
  currentPath = window.location.pathname;
  showMenu() {
    this.menuFlag = !this.menuFlag;
  }
  showProfileFlag() {
    this.profileFlag = !this.profileFlag;
  }
}
