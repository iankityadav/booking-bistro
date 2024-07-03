import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  restaurants = [
    {
      id: 0,
      image: '/images/pexels-chanwalrus-941861.jpg',
      name: 'Chanwalrus',
    },
    { id: 1, image: '/images/pexels-emrecan-2079438.jpg', name: 'Emrecan' },
    {
      id: 2,
      image: '/images/pexels-igor-starkov-233202-1307698.jpg',
      name: 'Igor Starkov',
    },
    {
      id: 3,
      image: '/images/pexels-lawrencesuzara-1581554.jpg',
      name: 'Lawrencesuzara',
    },
    {
      id: 4,
      image: '/images/pexels-life-of-pix-67468.jpg',
      name: 'Life of Pix',
    },
    { id: 5, image: '/images/pexels-pixabay-260922.jpg', name: 'Pixabay' },
    { id: 6, image: '/images/pexels-pixabay-262918.jpg', name: 'Pexel' },
    {
      id: 7,
      image: '/images/pexels-vedanti-66315-239975.jpg',
      name: 'Vedanti',
    },
    { id: 8, image: '/images/pexels-kaboompics-6267.jpg', name: 'Kaboom' },
    { id: 9, image: '/images/pexels-wb2008-2290070.jpg', name: 'Shaan' },
  ];
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;

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

  gotoBooking(id: number) {
    this.router.navigate(['/book'], { state: { restaurantId: id } });
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
