import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }
  getMassage() : void { 
    console.log('MockService');
  }
}
