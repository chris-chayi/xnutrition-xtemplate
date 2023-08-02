import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';
import {DomController} from '@ionic/angular';

@Directive({
    selector: '[appParallaxHeader]',
})
export class ParallaxHeaderDirective {
    header: any;
    headerHeight: number;
    moveImage: number;
    scaleImage: number;

    constructor(
        public element: ElementRef,
        public renderer: Renderer2,
        private domCtrl: DomController
    ) {
    }

    ngOnInit() {
        // console.log(`come`);
        let content = this.element.nativeElement;
        this.header = content.querySelector('.image-header');

        this.domCtrl.read(() => {
            this.headerHeight = this.header.clientHeight;
        });
    }

    @HostListener('ionScroll', ['$event']) onContentScroll($event) {
        const scrollTop = $event.detail.scrollTop;
        console.log(`scrollTop=${scrollTop}`);
        this.domCtrl.write(() => {
            this.headerHeight = this.header.clientHeight;
        });

        if (scrollTop > 0) {
            this.moveImage = scrollTop / 2;
            this.scaleImage = 1;
        } else {
            this.moveImage = scrollTop / 1.4;
            this.scaleImage = -scrollTop / this.headerHeight + 1;
        }
        let style =
            'translate3d(0,'
            +
            this.moveImage +
            'px,0) scale(' +
            this.scaleImage +
            ',' +
            this.scaleImage +
            ')';
        console.log(`style=${style}`);
        this.renderer.setStyle(
            this.header,
            'webkitTransform',
            style
        );
    }
}
