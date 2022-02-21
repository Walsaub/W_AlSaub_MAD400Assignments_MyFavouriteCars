import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') mouseenter() {
    this.underlineMe();
  }

  private underlineMe() {
    this.elm.nativeElement.style.textDecoration = "underline";
  }

  @HostListener('mouseleave') mouseleave() {
    this.dontUnderlineMe();
  }

  private dontUnderlineMe() {
    this.elm.nativeElement.style.textDecoration = "none";
  }

}
