import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

    @Input() count:number=0;
    @Output() update=new EventEmitter();
    
    increment(){ 
      this.count++;
      this.update.emit({count:this.count});
    }
    decrement(){
      this.count--;
      this.update.emit({count:this.count});
    }

}
