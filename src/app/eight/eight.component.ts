import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { fromEvent, map, mergeMap, of, skip, take } from 'rxjs';

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.scss']
})
export class EightComponent  implements OnInit {  



  constructor() { }

  ngOnInit() {
    // fromEvent<MouseEvent>(document,'click').pipe(
    //   map(ev => ev.clientX),
    //   mergeMap( num => of('Pozycja X: ', num))
    //   ).subscribe(data => console.log(data)
    // )

    fromEvent<MouseEvent>(document, 'click').pipe(
      map(ev => ev.clientY),
      skip(4)
    ).subscribe(data => console.log(data));
  } 


}
