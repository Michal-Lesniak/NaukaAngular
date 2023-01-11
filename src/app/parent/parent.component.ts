import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentCounter: number = 0;  
  constructor(){

  }

  ngOnInit(): void {
    setInterval(() => ++this.parentCounter,500);
  }


}
