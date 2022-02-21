import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input() affect?: string;

  constructor(private elm: ElementRef) { }


  @HostListener('mouseenter') mouseenter() {
    if (this.affect == "underline") {
      this.underlineMe();
    } else {
      this.boldMe();
    }
    
  }

  @HostListener('mouseleave') mouseleave() {
    if (this.affect == "underline") {
      this.dontUnderlineMe();
    } else {
      this.dontBoldMe();
    }
  }

  private underlineMe() {
    this.elm.nativeElement.style.textDecoration = "underline";
  }

  private dontUnderlineMe() {
    this.elm.nativeElement.style.textDecoration = "none";
  }

  private boldMe() {
    this.elm.nativeElement.style.fontWeight = "bold";
  }

  private dontBoldMe() {
    this.elm.nativeElement.style.fontWeight = "normal";
  }

}
