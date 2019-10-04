import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CarouselSlideDirective, SampleDirective } from './components/carousel/carousel.component';

@NgModule({
  declarations: [CarouselComponent, CarouselSlideDirective, SampleDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    CarouselComponent, CarouselSlideDirective, SampleDirective
  ]
})
export class SharedModule {}