import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { getSettings } from '../settings/state/settings.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private store: Store<any>) { }
  name: string = '';

  ngOnInit() {
    this.store.pipe(select(getSettings)).subscribe(settings => {
      //console.log('header', settings)
      this.name = settings.name;
    })
  }

  onSearch(value: string){

    if(value){
      this.router.navigate(['search', value]);
    }

  }

}
