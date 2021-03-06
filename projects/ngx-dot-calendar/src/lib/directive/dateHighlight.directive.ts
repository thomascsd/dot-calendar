import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[idate]'
})
export class DateHighlight {
  @HostBinding('class.hover') isHover = false;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.el.nativeElement.classList.contains('disabled')) {
      this.isHover = true;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHover = false;
  }
}
