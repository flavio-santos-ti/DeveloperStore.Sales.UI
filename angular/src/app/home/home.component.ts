import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProfileDropdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  handleProfileClick(): void {
    console.log('Profile clicked');
    // Implementar lógica adicional, se necessário
  }

  handleSignOutClick(): void {
    console.log('Sign out clicked');
    // Implementar lógica de logout ou navegação
  }
 
}
