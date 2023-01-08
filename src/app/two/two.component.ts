import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

 

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  mySearch: FormControl = new FormControl ('');

  constructor( ) { }


  ngOnInit(): void {
    this.mySearch.valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe(data =>  console.log(data));
  }
}
