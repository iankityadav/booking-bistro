import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.authService
      .signup({
        email: this.email,
        password: this.password,
        fullName: this.fullName,
        phone: this.phone,
        role: '0',
      })
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Login failed', error);
        },
      });
  }

  onSubmit(form: any) {
    console.log(this.email, this.password);
    this.signup();
  }
}
