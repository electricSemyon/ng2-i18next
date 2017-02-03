import { Renderer, ElementRef, OnChanges } from '@angular/core';
import { I18nService } from './i18n-service';
export declare class I18nDirective implements OnChanges {
    private i18n;
    private el;
    private renderer;
    content: string;
    phContent: string;
    constructor(i18n: I18nService, el: ElementRef, renderer: Renderer);
    ngOnChanges(): void;
    private loadAndRender(content, doRenderCallback);
}
