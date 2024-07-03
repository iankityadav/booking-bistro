import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          text: 'User logged in successfully',
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed', error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          text: 'Please check your credentials',
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });
      },
    });
  }

  onSubmit(form: any) {
    console.log(this.email, this.password);
    this.login();
  }
}
