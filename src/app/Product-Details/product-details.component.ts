import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  
  @Input () product: Product|undefined;

  onUpdate(data:any){
    if(this.product != undefined)
        this.product.likes=data.count;
    }
}
