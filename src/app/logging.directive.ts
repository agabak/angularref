import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLogging]'
})
export class LoggingDirective {
@Input('appLogging') format: number;

  constructor(private el: ElementRef) { }

    @HostListener('blur') OnBlur() {
      const value: string = this.el.nativeElement.value;
      console.log(this.el.nativeElement.value = value.substring(0, this.format));
    }

}
