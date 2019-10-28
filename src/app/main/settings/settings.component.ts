import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  settingsForm: FormGroup;
  get tags(): FormArray {
    return <FormArray>this.settingsForm.get('tags')
  }

  ngOnInit() {
    /*
    this.settingsForm = new FormGroup({
      name: new FormControl("Premium Times"),
      url: new FormControl()
    });

    //patchValue
    //setValue

    this.settingsForm.setValue({
      name: 'The Cable',
      url: 'https://www.thecable.ng'
    })

    */

   this.settingsForm = this.fb.group({
      name: 'Punch News',
      url: ['https://www.punchng.com', [Validators.required, Validators.minLength(5)]],
      tags: this.fb.array([  ])
    
    })

    let defTags = [ {tag: 'html'}, {tag: 'css'},{tag: 'javascript'}, {tag: 'ux'} ]
    
    defTags.forEach(o => {
        this.tags.push(this.buildTag(o));
      });
    
  }

  buildTag(values: object = {tag: 'New'}){
    return this.fb.group({
      ...values
    })
  }

  addNewTag(){
    this.tags.push(this.buildTag())
  }

  removeTag(index: number){
    this.tags.removeAt(index);
  }

  save(){
    console.log(this.settingsForm)
  }

  //dynamic validation
  //const url = this.settingsForm.get('url')
  //url.setValidators(Validators.required)
  //url.clearValidators();
  //url.updateValueAndValidity();

}
