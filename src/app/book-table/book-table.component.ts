import { Component } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css',
})
export class BookTableComponent {
  state: any;
  moment: moment.Moment;
  constructor(private router: Router) {
    this.state = this.router.lastSuccessfulNavigation?.extras.state;
    console.log(this.state);
    this.moment = moment(this.state.createdAt);
  }
}
