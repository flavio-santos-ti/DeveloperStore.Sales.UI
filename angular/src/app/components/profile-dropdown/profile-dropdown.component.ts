import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css'],
})
export class ProfileDropdownComponent implements OnInit {
  isDropdownOpen = false;
  username: string = '';
  firstname: string = '';

  @Output() profileClicked = new EventEmitter<void>();
  @Output() signOutClicked = new EventEmitter<void>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const user = this.userService.getUser();
    if (user) {
      this.firstname = user.firstname; 
      this.username = user.username;      
    } else {
      this.username = 'Default';
    }
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
