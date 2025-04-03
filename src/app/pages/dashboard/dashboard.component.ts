import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
export interface User {
  email: string | null;
  name: string | null;
  phone: string | null;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export class DashboardComponent implements OnInit {
  user: User | null = null;
  firstName: string = '';
  lastName: string = '';
  phoneCountryCode: string = '965'; 
  phoneNumber: string = '';

  constructor(private authService: AuthService) {} 

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        this.user = JSON.parse(userData) as User;
        this.preprocessUserData();
      } catch (e) {
        console.error("Error parsing user data from localStorage", e);
        this.handleMissingUser();
      }
    } else {
      this.handleMissingUser();
    }
  }

  private handleMissingUser(): void {
     console.error('User data not found in localStorage');

  }

  private preprocessUserData(): void {
    if (this.user) {
        const nameParts = this.user.name?.trim().split(' ') || [];
        this.firstName = nameParts[0] || 'Test'; 
        this.lastName = nameParts.slice(1).join(' ') || 'User'; 

        this.phoneNumber = this.user.phone || '98765432';

        this.firstName = "Test"; 
        this.lastName = "Test"; 
        this.phoneCountryCode = "965"; 
        this.phoneNumber = "98563214"; 

        if(!this.user.email) {
            this.user.email = "test@yopmail.com";
        }

    } else {
      this.firstName = "Default";
      this.lastName = "User";
      this.phoneNumber = "";
      this.phoneCountryCode = "965";
    }
  }

  get authServiceGetter() {
    return this.authService;
  }

  saveProfile(): void {
      console.log('Saving profile...');
      alert('Save functionality not implemented in this example.');
  }

  togglePasswordVisibility(event: MouseEvent): void {
    const button = event.currentTarget as HTMLButtonElement;
    const inputGroup = button.closest('.input-group');
    const input = inputGroup ? inputGroup.querySelector('input') : null;
    const icon = button.querySelector('i');

    if (input && icon) {
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    } else {
        console.warn("Could not find input or icon for password toggle.");
    }
  }
}