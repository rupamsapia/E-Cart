import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  upadteScarchText(event: any){
    this.searchText = event.target.value;
  }
}
