import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService) {
    authService
      .getAuthStatus()
      .subscribe((status) => (this.isLoggedIn = status));
  }
  showMenu() {
    this.menuFlag = !this.menuFlag;
  }
  showProfileFlag() {
    this.profileFlag = !this.profileFlag;
  }
}
