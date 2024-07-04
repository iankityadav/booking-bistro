import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { RestaurantsPage } from '../model/types';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  restaurants = [
    {
      id: 0,
      image: '/images/pexels-chanwalrus-941861.jpg',
    },
    { id: 1, image: '/images/pexels-emrecan-2079438.jpg' },
    {
      id: 2,
      image: '/images/pexels-igor-starkov-233202-1307698.jpg',
    },
    {
      id: 3,
      image: '/images/pexels-lawrencesuzara-1581554.jpg',
    },
    {
      id: 4,
      image: '/images/pexels-life-of-pix-67468.jpg',
    },
    { id: 5, image: '/images/pexels-pixabay-260922.jpg' },
    { id: 6, image: '/images/pexels-pixabay-262918.jpg' },
    {
      id: 7,
      image: '/images/pexels-vedanti-66315-239975.jpg',
    },
    { id: 8, image: '/images/pexels-kaboompics-6267.jpg' },
    { id: 9, image: '/images/pexels-wb2008-2290070.jpg' },
  ];
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  data: any[] | undefined;
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  isLoggedIn: boolean = false;
  pageEvent: PageEvent | undefined;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) {
    this.authService
      .getAuthStatus()
      .subscribe((status) => (this.isLoggedIn = status));
    this.apiService
      .viewAllRestaurants(this.pageIndex, this.pageSize)
      .subscribe((data: RestaurantsPage) => {
        this.shuffleArray(this.restaurants);
        let list: any[] = [];
        data.content.map((e, i) => {
          list.push({ ...e, ...this.restaurants[i] });
        });
        this.data = list;
        console.log(this.data);
      });
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }

  gotoBooking(res: any) {
    this.router.navigate(['/book'], { state: { ...res } });
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
