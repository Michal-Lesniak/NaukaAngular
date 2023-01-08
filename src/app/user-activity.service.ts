import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserActivityService {

  constructor() { }

  valueEmmiter = new BehaviorSubject<number>(100);
}
