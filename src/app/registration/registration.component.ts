import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  user: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.checkUserExists(this.user).subscribe(
      (exists: boolean) => {
        if (!exists) {
          // Proceed with registration
          this.authService.register(this.user).subscribe(
            (response) => {
              alert('Successfully created your account');
              this.router.navigate(['/dashboard']);
            },
            (error) => {
              alert('An error occurred while creating your account.');
            }
          );
        } else {
          alert(
            'The Email or Username already exists. Please enter different ones.'
          );
        }
      },
      (error) => {
        alert('An error occurred while checking for existing users.');
      }
    );
  }

  // Method to check if the email or username already exists
}
