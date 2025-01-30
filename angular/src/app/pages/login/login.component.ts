import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule, FontAwesomeModule, AlertComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false; // This variable is used to toggle the visibility of the password input field
  isLoading: boolean = false; // Adicionando a variável de controle do spinner
  faSpinner = faSpinner;
  errorMessage: { title: string, details: string[] } | null = null;

  constructor(private router: Router, library: FaIconLibrary, private http: HttpClient) {
    library.addIcons(faEye, faEyeSlash, faSpinner);
  }

  // Método para limpar o alerta
  clearAlert(): void {
    this.errorMessage = null;
  }
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  

  onSubmit(): void {
    this.isLoading = true; // Ativando o spinner

    const loginData = {
      username: this.username,
      password: this.password
      
    };
  
    this.http.post<{ token: string }>('http://localhost:5016/api/Auth/Login', loginData)
    .subscribe({
      next: (response) => {
        console.log('Login successful, token:', response.token);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('username', this.username);
        this.router.navigate(['/home']);
        this.isLoading = false; // Desativando o spinner em caso de erro
      },
      error: (error) => {
        console.error('Login failed:', error);
        console.log('Error message:', error.error.message);
        // Extrai apenas a mensagem de erro
        const errorMessage = error.error.message || 'An unexpected error occurred. Please try again.';
        this.errorMessage = {
          title: 'Login Failed',
          details: [errorMessage] // Passa a mensagem de erro como um array de detalhes
        };        
        this.isLoading = false; // Desativando o spinner após a conclusão da requisição
      },
       complete: () => {
        this.isLoading = false; // Desativando o spinner após a conclusão da requisição
      }      
    });
  }
}
