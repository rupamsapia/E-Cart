import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  product:{
      id: number,
      name: string,
      description: string,
      brand: string,
      gender: string,
      category: string,
      size: number[],
      color: string[],
      price: number,
      discountPrice?: number,
      is_in_inventory: boolean,
      items_left: number,
      imageURL: string,
      slug: string,
  };
}
