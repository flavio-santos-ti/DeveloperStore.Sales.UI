import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDropdownComponent } from '../profile-dropdown/profile-dropdown.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProfileDropdownComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  handleProfileClick(): void {
    console.log('Profile clicked');
    // Implement additional logic if necessary
  }

  handleSignOutClick(): void {
    console.log('Sign out clicked');
    // Implement logout or navigatin logic
  }

  handleSearchChange(searchValue: string): void {
    console.log('Search value:', searchValue);
    // Implement logic to handle the search value
  }
 
 
}
