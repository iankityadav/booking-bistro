import { Component } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { Booking } from '../model/types';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css',
})
export class BookTableComponent {
  state: any;
  moment: Function;
  guest: number[];
  slots!: string[];
  booking!: Booking;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) {
    this.state = this.router.lastSuccessfulNavigation?.extras.state;
    console.log(this.state);
    this.moment = moment;
    this.guest = Array.from({ length: 19 }, (_, i) => i + 2);
    const workingHours: string = this.state.workingHours;
    const [start, end] = workingHours.split('-');
    console.log(start, end);
    this.slots = this.generateTimeSlots(start, end, 30);
    this.booking = {
      userId: authService.getUserId() as string,
      restaurantId: this.state.restaurantId,
      date: moment().format('YYYY-MM-DD'),
      timeSlot: this.slots[0],
      numberOfGuests: 2,
    };
  }
  generateTimeSlots(startTime: any, endTime: any, timeSlotMinutes: number) {
    const slots = [];
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);

    let currentSlot = start;
    while (currentSlot <= end) {
      slots.push(
        currentSlot.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
      currentSlot = new Date(currentSlot.getTime() + timeSlotMinutes * 60000);
    }

    return slots;
  }
  createBooking() {
    this.booking.date = this.booking.date + 'T00:00:00';
    this.apiService.bookTable(this.booking).subscribe((e) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: 'Table booked successfully',
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });
      this.router.navigate(['/booking']);
    });
  }
}
