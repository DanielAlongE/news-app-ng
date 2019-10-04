import { Injectable } from '@angular/core';
import * as dotProp from '../libs/_dotProps';

@Injectable({
  providedIn: 'root'
})
export class DotpropService {

  constructor() { }

  set(obj: object, prop: string, value: any): any {

    return dotProp.set(obj, prop, value);
  }

  get(obj: object, prop: string, value?: any): any {

    return dotProp.get(obj, prop, value);
  }

  delete(obj: object, prop: string): any {

    return dotProp.delete(obj, prop);
  }

  merge(obj: object, prop: string, value: object): any {

    return dotProp.merge(obj, prop, value);
  }


}
