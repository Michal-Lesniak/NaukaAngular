import { Component, OnInit } from '@angular/core';
import { interval, of} from 'rxjs';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent  implements OnInit {
  constructor(){

  }

  ngOnInit() {
    const counter = interval(1000);
    const sub = counter.pipe(
    ).subscribe(data => console.log(data)); 

    setTimeout(() => sub.unsubscribe(), 7000);
  }
  observableRun(){
    of({name: 'Stefan', age: 45, sex: 'male'},{name:'Monika', age: 30, sex: 'female' }).subscribe(data => console.log(data));
  }

}
