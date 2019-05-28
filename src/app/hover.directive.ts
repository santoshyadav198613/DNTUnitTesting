import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostBinding('style.background-color') backgroudColor: string;
  constructor() { }

  @HostListener('mouseenter') onmouseenter() {
    this.backgroudColor = 'red';
  }


  @HostListener('mouseleave') onmouseleave() {
    this.backgroudColor = 'steelblue';
  }
}
