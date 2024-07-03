export interface Booking {
  bookingId?: number;
  customerId: number;
  restaurantId: number;
  date: string;
  numberOfGuests: number;
  timeSlot: string;
  status?: string;
  createdAt?: string;
}

export interface ReservationRequest {
  requestId?: number;
  bookingId: number;
  status: string;
  createdAt?: string;
}

export interface User {
  email: string;
  password: string;
}

export interface SignupRequest {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  role: '0' | '1';
}
