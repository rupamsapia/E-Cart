import { Component } from '@angular/core';
import { SearchComponent } from "./search/search.component";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from "./container/container.component";

@Component({
    selector: 'productlist',
    standalone: true,
    templateUrl: './productlist.component.html',
    styleUrl: './productlist.component.css',
    imports: [SearchComponent, CommonModule, ContainerComponent]
})
export class ProductlistComponent {
    listofString: string[] = ['rupam','rajat','somesh','ankana','dola'];
//     // name="rupam"
//     addToCart:number = 0;
//    product = {
//     name: 'iphone 13',
//     price: 999,
//     color: 'matt balck',
//     discount: 8.5,
//     instock: 5,
//     pImage:"/assets/image/iphone.png" 
//    }

//    GetDiscountedPrice (){
//    return this.product.price - (this.product.price * this.product.discount /100)
//    }

//    onNameChange(event: any){
//     // this.name = event.target.value
//     console.log(event.target.value);
//    }
//    incrementCartValue(){
//     if(this.addToCart < this.product.instock){
//         this.addToCart ++;
//     }
//    }
//    decrementCartValue(){
//     if(this.addToCart > 0){
//         this.addToCart --;
//     }
    
//    }
}
