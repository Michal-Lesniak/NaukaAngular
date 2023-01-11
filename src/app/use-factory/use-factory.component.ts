import { Component } from '@angular/core';
import { PrimeService } from '../prime.service';
@Component({
  selector: 'app-use-factory',
  templateUrl: './use-factory.component.html',
  styleUrls: ['./use-factory.component.scss']
})
export class UseFactoryComponent {

constructor(private primeService: PrimeService ){
}
ngOnInit():void {
  this.primeService.getMassage();
  }
}
