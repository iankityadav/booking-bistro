import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './model/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  // Method to book a table
  bookTable(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/bookings`, booking);
  }

  // Method to get all bookings for a customer, paginated
  getAllBookingsForCustomer(
    customerId: number,
    page: number,
    size: number
  ): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/bookings/customer/${customerId}?page=${page}&size=${size}&sort=createdAt,desc`
    );
  }

  // Method to get all reservation requests for a manager, paginated and filtered by status
  getAllReservationRequestsForManager(
    managerId: number,
    status: string,
    page: number,
    size: number
  ): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/reservations/manager/${managerId}?status=${status}&page=${page}&size=${size}&sort=createdAt,asc`
    );
  }

  // Method to cancel a booking by customer
  cancelBooking(bookingId: number): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/bookings/cancel/${bookingId}`,
      null
    );
  }

  // Method to reject/confirm reservation request by manager
  updateReservationRequest(requestId: number, status: string): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/reservations/update/${requestId}`,
      { status }
    );
  }

  // Method to create a restaurant (register)
  registerRestaurant(restaurant: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/restaurants`, restaurant);
  }

  // Method to get restaurant details required for booking
  getRestaurantDetails(restaurantId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/restaurants/${restaurantId}`);
  }

  // Method to view all reservation requests
  viewAllReservationRequests(page: number, size: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/reservations?page=${page}&size=${size}&sort=createdAt,asc`
    );
  }
}
