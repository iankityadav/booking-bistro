import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { LoadingService } from './loading.service';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'booking-bistro';
  isLoading = true;
  constructor(private router: Router, private loaderService: LoadingService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
        console.log(this.loaderService.isLoading$);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        console.log(this.loaderService.isLoading$);
        setTimeout(() => this.loaderService.hide(), 1000);
      }
    });
  }
  ngOnInit() {
    this.loaderService.isLoading$.subscribe((data) => {
      this.isLoading = data;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.loaderService.hide(), 1000);
  }
}
