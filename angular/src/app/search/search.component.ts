import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchChange = new EventEmitter<string>();
  searchText: string = '';

  onSearchChange(value: string): void {
    this.searchText = value;
    this.searchChange.emit(this.searchText);
  }
}
