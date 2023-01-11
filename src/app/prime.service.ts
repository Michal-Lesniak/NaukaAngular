import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimeService {

  constructor() { }

  getMassage() : void { 
    console.log('PrimeService');
  }
}
