import {  Directive, ElementRef, Renderer2, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appProductHighlight]',
  standalone: true
})
export class AppProductHighlightDirective implements OnInit {

 @Input('appProductHighlight') product: any;  // Input to receive binding from [appProductHighlight]

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
  
    // Guard against undefined product input
    if (this.product && this.product.discount > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '3px solid gold');
    }

    if (this.product && this.product.stock === 0) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.5');
      this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');  // Disable hover effects
    }
  }

}
