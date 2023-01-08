import { Component, DoCheck, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { UserActivityService } from './user-activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck, OnInit{
  title = 'Nauka';
  idOffer: string ='A5';
  randomValue!: number;
  constructor(private currentRoute: Router, private service: UserActivityService){

  }

  ngOnInit(): void{
    this.service.valueEmmiter.subscribe(value => this.randomValue = value); 
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
        this.title = '';
        break;
    }
  };
}
