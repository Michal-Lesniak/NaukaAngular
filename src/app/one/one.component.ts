import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit{
 

 authors = [
   { id: 1, name: 'John Smith' },
   { id: 2, name: 'Jane Leesy' },
   { id: 3, name: 'Joe Bloggs' },
   { id: 4, name: 'Mike Moore' },
 ]

 constructor(private route:Router) {}

 ngOnInit() {
 }

 onRow(author: any ):void {
   this.route.navigate(['/one', author.id]);

 }
 
}
