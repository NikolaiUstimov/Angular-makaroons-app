import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonEffects]'
})
export class ButtonEffectsDirective implements OnInit {
  @Input() defaultBgColor!: string;
  @Input() focusBgColor!: string;
  @Input() hoverBgColor!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundImage', this.defaultBgColor);
  }

  @HostListener('focus')
  onFocus(): void {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundImage', this.focusBgColor);
  }

  @HostListener('blur')
  onBlur(): void {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundImage', this.defaultBgColor);
  }

  @HostListener('mouseover')
  onHover(): void {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundImage', this.hoverBgColor);
  }

  @HostListener('mouseout')
  offHover(): void {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundImage', this.defaultBgColor);
  }

}
