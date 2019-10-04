import { Component, OnInit, ContentChildren, QueryList, Directive, Input, TemplateRef, ElementRef } from '@angular/core';

let nextId = 0;

//just playing around sample.directive
@Directive({
  selector: '[sample]',
})
export class SampleDirective { 
  span: HTMLElement;

  constructor(public ref: ElementRef<any>){}

  ngOnInit(): void {

   //console.log("sample-directive", this.ref, this.ref.nativeElement) 
    this.span = this.ref.nativeElement;

  }

 }


@Directive({
  selector:'ng-template[carouselCaption]'
})
export class CarouselCaptionDirective {
  constructor(public captionRef: TemplateRef<any>) {}
}


@Directive({
  selector:'ng-template[carouselSlide]'
})
export class CarouselSlideDirective {
  @Input() id = `ngb-slide-${nextId++}`;
  @Input() title: string;
  @Input() description: string;

  //@ViewChild(TemplateRef, {static:true}) omo: TemplateRef;

  constructor(public templateRef: TemplateRef<any>, public omo: TemplateRef<CarouselCaptionDirective>) {}
}





@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() showControls: boolean = true;
  @Input() id: string = "my-carousel";
  @Input() class: string = "";
  @Input('ngStyle') style: object = {};

  @ContentChildren(CarouselSlideDirective) slides: QueryList<CarouselSlideDirective>

  @ContentChildren(SampleDirective) sample: QueryList<SampleDirective>

  ngAfterContentInit(): void {
    console.log('sample',this.sample.toArray());
    
  }

  

}
