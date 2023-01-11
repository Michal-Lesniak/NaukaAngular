import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mock2Service {

  constructor() { }

  getMassage() : void { 
    console.log('Mock2Service');
  }
}
