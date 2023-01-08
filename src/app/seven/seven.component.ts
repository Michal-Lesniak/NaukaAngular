import { Component, OnInit   } from '@angular/core';
import { of } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';


interface person{
    name: string;
    age: number;  
}

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.scss']
})
export class SevenComponent implements OnInit  {

  person1: person = {
    name: "Maciej",
    age: 20
  };

  person2: person = {
    name: "Tanya",
    age: 23,
  };

  constructor(){

  }

  ngOnInit(): void {
    of(this.person1, this.person2).pipe(
      distinctUntilKeyChanged('name')
      ).subscribe(data=> console.log(data));

    } 
}


