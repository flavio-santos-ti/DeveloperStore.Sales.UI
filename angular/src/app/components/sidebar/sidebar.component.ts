import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router) {}

  logout(): void {
    console.log("User logged out of the system.");
    this.router.navigate(['/login']);
  }

  preventNavigation(event: Event): void {
    console.log("Entered the preventNavigation method.");
    event.preventDefault(); // Evita que o link navegue para outra página
  }
}
