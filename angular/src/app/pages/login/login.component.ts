import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertComponent } from '../../components/alert/alert.component';
import { UserService } from '../../services/user.service';
import { UserResponse } from '../../models/user-response.model';
import { User } from '../../models/user.model';


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
  user: User | null = null; // Variável para armazenar os dados do usuário
  
  constructor(private router: Router, library: FaIconLibrary, private http: HttpClient, private userService: UserService) {
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
  
    // Log in to get the token.
    this.http.post<{ token: string }>('http://localhost:5016/api/Auth/Login', loginData)
    .subscribe({
      next: (response) => {
        console.log('Login successful, token:', response.token);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('username', this.username);

        const headers = new HttpHeaders().set('Authorization', `Bearer ${response.token}`);
        
        // After logging in, make the request to retrieve the user data.
        this.http.get<UserResponse>(`http://localhost:5016/api/Users/by-username/${this.username}`, { headers })
          .subscribe({
            next: (apiUserData) => {
              // Store the user data in memory (in the User Model).
              this.user = {
                email: apiUserData.email,
                username: apiUserData.username,
                firstname: apiUserData.name.firstname, 
                lastname: apiUserData.name.lastname,   
                address: {
                  city: apiUserData.address.city,
                  street: apiUserData.address.street,
                  number: apiUserData.address.number,
                  zipcode: apiUserData.address.zipcode,
                  geolocation: {
                    lat: apiUserData.address.geolocation.lat,
                    long: apiUserData.address.geolocation.long
                  }
                },
                phone: apiUserData.phone,
                status: apiUserData.status,
                role: apiUserData.role,
                token: response.token // Add the token to the Model.
              };

              // Store the user data in the UserService (in memory).
              this.userService.setUser(this.user);
              console.log('User data:', this.user);

              // Navigate to the home page
              this.router.navigate(['/home']);
            },
            error: (error) => {
              console.error('Failed to fetch user data:', error);
              console.error('Status:', error.status);
              console.error('Error Message:', error.error);
              // Set the error message with the standar structure (title and details).
              this.errorMessage = {
                title: 'Error',
                details: error.error.message || ['Failed to fetch user data. Please try again.']
              };            
            }
          });

        this.isLoading = false; 
      },
      error: (error) => {
        console.error('Login failed:', error);
        console.log('Error message:', error.error.message);
        
        const errorMessage = error.error.message || 'An unexpected error occurred. Please try again.';
        this.errorMessage = {
          title: 'Login Failed',
          details: [errorMessage] 
        };        
        this.isLoading = false; 
      },
       complete: () => {
        this.isLoading = false; 
      }      
    });
  }
}
