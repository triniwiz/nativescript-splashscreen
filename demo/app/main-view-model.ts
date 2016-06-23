import {Observable} from 'data/observable';
import * as app from 'application';

export class HelloWorldModel extends Observable {
  public message: string = `NativeScript Splash Screens!`;


  constructor() {
    super();
    
  }

  public btnTap() {
    console.log(`tap`);
  }
}