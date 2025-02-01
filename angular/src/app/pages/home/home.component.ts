import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDropdownComponent } from '../../components/profile-dropdown/profile-dropdown.component';
import { SearchComponent } from '../../components/search/search.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NotificationBellComponent } from '../../components/notification-bell/notification-bell.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProfileDropdownComponent, SearchComponent, SidebarComponent, NotificationBellComponent, RouterModule],
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
