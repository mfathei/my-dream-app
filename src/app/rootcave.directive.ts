import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myRootCave]'
})
export class RootcaveDirective {
    @Input('highlightColor') myRootCave: string;
    // @Input('myRootCave') test: string;

    constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onmouseenter() {
        this.changeColor(this.myRootCave || 'red');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.changeColor(null);
    }

    private changeColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}