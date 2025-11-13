import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    model = new Customer('Rohit','Ingawale','rohit.ingawale@transflower.in',7775967743,21,
                     new Date(2000,18,6),'Satara',
                     'S',
                     false,['T', 'B']);
    constructor() {  }

}
