import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  fullName: string = '';
  phone: string = '';
  role: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.authService
      .signup({
        email: this.email,
        password: this.password,
        fullName: this.fullName,
        phone: this.phone,
        role: this.role ? '1' : '0',
      })
      .subscribe({
        next: () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            text: 'User registered successfully',
            showConfirmButton: false,
            timer: 1500,
            toast: true,
          });
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Login failed', error);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            text: 'Error occured!!',
            showConfirmButton: false,
            timer: 1500,
            toast: true,
          });
        },
      });
  }

  onSubmit(form: NgForm) {
    console.log(this.role, form);
    this.signup();
  }
}
