import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css'],
})
export class ProfileDropdownComponent {
  isDropdownOpen = false;

  @Output() profileClicked = new EventEmitter<void>();
  @Output() signOutClicked = new EventEmitter<void>();

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  onProfileClick(): void {
    this.profileClicked.emit();
    this.closeDropdown();
  }

  onSignOutClick(): void {
    this.signOutClicked.emit();
    this.closeDropdown();
  }
}
