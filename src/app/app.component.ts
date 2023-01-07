import { Component, DoCheck } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'Nauka';
  idOffer: string ='A5';

  constructor(private currentRoute: Router){

  }

  ngDoCheck(): void {
    switch(this.currentRoute.url){
      case '/one':
        this.title = 'PageOne';
        break;
      case '/two':
        this.title = 'PageTwo';
        break;
      case '/three':
        this.title = 'PageThree';
        break;
      case  '/four/A5':
        this.title = 'PageFour';
        break;
      default:
        this.title = 'PageOne';
        break;
    }
  };
}
