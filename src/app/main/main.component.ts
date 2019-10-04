import { Component, OnInit } from '@angular/core';
import { SampleService } from '../core/sample.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private sample: SampleService) { }

  ngOnInit() {

    //this.sample.do().subscribe(arr => console.log(arr))
    //console.log(typeof this.sample)
  }

}
