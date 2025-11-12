import { AppProductHighlightDirective } from './app-product-highlight.directive';

describe('AppProductHighlightDirective', () => {
  it('should create an instance', () => {
    // Provide a minimal ElementRef mock
    const mockEl = { nativeElement: document.createElement('div') } as any;
    // Use a jasmine spy object for Renderer2 with the methods used by the directive
    const mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle']);

    const directive = new AppProductHighlightDirective(mockEl, mockRenderer as any);
    expect(directive).toBeTruthy();
  });
});
