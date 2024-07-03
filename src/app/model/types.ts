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

export interface RestaurantsPage {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: [
    {
      restaurantId: number;
      name: string;
      cuisines: string;
      location: string;
      workingDays: string;
      workingHours: string;
      timeSlotInterval: string;
      createdAt: string;
    }
  ];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  empty: boolean;
}
