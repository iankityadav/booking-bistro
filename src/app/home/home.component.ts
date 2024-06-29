import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  restaurants = [
    { image: '/images/pexels-chanwalrus-941861.jpg', name: 'Chanwalrus' },
    { image: '/images/pexels-emrecan-2079438.jpg', name: 'Emrecan' },
    {
      image: '/images/pexels-igor-starkov-233202-1307698.jpg',
      name: 'Igor Starkov',
    },
    {
      image: '/images/pexels-lawrencesuzara-1581554.jpg',
      name: 'Lawrencesuzara',
    },
    { image: '/images/pexels-life-of-pix-67468.jpg', name: 'Life of Pix' },
    { image: '/images/pexels-pixabay-260922.jpg', name: 'Pixabay' },
    { image: '/images/pexels-pixabay-262918.jpg', name: 'Pexel' },
    { image: '/images/pexels-vedanti-66315-239975.jpg', name: 'Vedanti' },
    { image: '/images/pexels-kaboompics-6267.jpg', name: 'Kaboom' },
    { image: '/images/pexels-wb2008-2290070.jpg', name: 'Shaan' },
  ];
}
