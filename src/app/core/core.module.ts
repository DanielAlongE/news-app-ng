import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { SampleService } from './sample.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild([]), 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[FormsModule, CommonModule, ReactiveFormsModule],
  providers: []
})
export class CoreModule { }
