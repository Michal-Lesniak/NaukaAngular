import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss'],
})
export class GrandchildComponent implements OnInit  {
@Input() childCounter?: number;

grandChildCounter: number = 20;
constructor(private ref:ChangeDetectorRef ) {}

ngOnInit(): void {
  setInterval(()=>this.grandChildCounter++, 500);

  setInterval(()=>this.ref.detectChanges() , 1500); //Wymuszenie odswiezenia co 1.5 s
}


}
