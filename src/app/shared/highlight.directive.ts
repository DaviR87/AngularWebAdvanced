import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() hlColor = 'yellow'
  @HostListener('mouseenter') onMouseEnter() {
    this.changeTheColor();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.el.nativeElement.style.backgroundColor = this.hlColor;
  }

  private changeTheColor() {
    this.el.nativeElement.style.backgroundColor = 'violet';
  }
}