import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css',
})
export class BookTableComponent {
  state: any;
  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation());

    this.state = JSON.stringify(this.router.getCurrentNavigation()?.extras);
  }
}
