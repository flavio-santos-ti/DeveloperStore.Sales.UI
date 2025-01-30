import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
  username: string = '';

  @Output() profileClicked = new EventEmitter<void>();
  @Output() signOutClicked = new EventEmitter<void>();

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || 'Tom Cook'; // Usar o nome de usuário ou 'Tom Cook' como fallback
  }


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
