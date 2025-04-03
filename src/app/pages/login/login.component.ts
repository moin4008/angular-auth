import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Adjust path if necessary
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Ensure this points to your CSS file
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const sampleUserData = {
      id: 123, // Optional: You might have an ID
      email: 'test@yopmail.com',
      name: 'Test User', // Use a full name so the splitting logic can work
      phone: '+965 98563214', // Include country code and number as expected
      // You could add other relevant user properties here if needed
      // e.g., registrationDate: '2024-01-15T10:00:00Z',
      // e.g., preferences: { notifications: true }
    };
    // Clear previous error message
    this.errorMessage = '';
    this.router.navigate(['/dashboard']); 
    localStorage.setItem('user', JSON.stringify(sampleUserData));
    // this.authService.login(this.email, this.password).subscribe({
    //   next: (response) => {
    //     console.log('Login successful', response);
    //     // Store user info (be mindful of security with localStorage)
    //     localStorage.setItem('user', JSON.stringify(response));
    //     // Navigate to the dashboard or desired route
    //     this.router.navigate(['/dashboard']); // Adjust route as needed
    //   },
    //   error: (error) => {
    //     console.error('Login failed', error);
    //     // Provide a user-friendly error message
    //     this.errorMessage = 'Invalid email or password. Please try again.';
    //     // You might want more specific error handling based on error status/message
    //   }
    // });
  }
}