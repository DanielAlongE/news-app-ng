import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
//import { SettingsActions } from '../settings/state/settings.action';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute, private store: Store<any>) { }


  ngOnInit() {
    //console.log(this.route.snapshot)

    //this.store.dispatch(new SettingsActions.UpdateSettings({}))

  }


}
