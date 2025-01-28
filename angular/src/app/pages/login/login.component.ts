import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule, FontAwesomeModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false; // This variable is used to toggle the visibility of the password input field

  constructor(private router: Router, library: FaIconLibrary) {
    library.addIcons(faEye, faEyeSlash);
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  
  onSubmit(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Here you can implement any validation logic, but for now, the redirection will be don unconditionally.
    this.router.navigate(['/home']);
  }
}
