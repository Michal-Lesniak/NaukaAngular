import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of} from 'rxjs';

interface Authors{
  id: number;
  name: string;
}

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss']
})
export class FiveComponent implements OnInit { 

  
  authors = [
    { id: 1, name: 'John Smith' },
    { id: 2, name: 'Jane Leesy' },
    { id: 3, name: 'Joe Bloggs' },
    { id: 4, name: 'Mike Moore' },
  ]
  constructor (private route: Router){}

  ngOnInit(): void {
  }

  authors$: Observable<Authors[]> = of(this.authors);

  onRow(author: any ):void {
    this.route.navigate(['/one', author.id]);
 
  }
}
