import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
//import { SampleService } from './sample.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, RouterModule.forChild([])
    , HttpClientModule
  ],
  exports:[HeaderComponent],
  providers: []
})
export class CoreModule { }
