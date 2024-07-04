import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { BookingPage } from '../model/types';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  bookings: BookingPage | undefined;
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {
    const userId = Number(this.authService.getUserId());
    console.log(
      this.apiService
        .getAllBookingsForCustomer(userId, 0, 10)
        .subscribe((data: any) => {
          this.bookings = data;
        })
    );
  }

  getColor(key: string) {
    let bg = '';
    switch (key) {
      case 'PENDING':
        bg = 'bg-yellow-300';
        break;
      case 'CONFIRMED':
        bg = 'bg-green-300';
        break;
      case 'REJECTED':
        bg = 'bg-red-300';
        break;
      case 'CANCELLED':
        bg = 'bg-gray-300';
        break;
      default:
        break;
    }
    return bg;
  }
}
