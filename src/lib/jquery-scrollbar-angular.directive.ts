import { AfterViewInit, Directive, ElementRef, Renderer2  } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[jquery-scroll-bar]'
})
export class JqueryScrollbarAngularDirective implements AfterViewInit {

  constructor(private renderer: Renderer2,
              private el: ElementRef) {
    renderer.addClass(el.nativeElement, 'scrollbar-macosx');
  }

  ngAfterViewInit() {
    $(this.el.nativeElement).scrollbar();
  }
}
