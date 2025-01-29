import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

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

  constructor(private router: Router, library: FaIconLibrary, private http: HttpClient) {
    library.addIcons(faEye, faEyeSlash);
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  

  onSubmit(): void {
    const loginData = {
      username: this.username,
      password: this.password
      
    };
  
    this.http.post<{ token: string }>('http://localhost:5016/api/Auth/Login', loginData)
    .subscribe({
      next: (response) => {
        console.log('Login successful, token:', response.token);
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        // Exibir mensagem de erro ao usuário
      }
    });
  }
}
