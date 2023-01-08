import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetchdata-v2',
  templateUrl: './fetchdata-v2.component.html',
  styleUrls: ['./fetchdata-v2.component.scss']
})
export class FetchdataV2Component implements OnInit { 
myText: string = '';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('/data/authors.json', {responseType: 'text'}).subscribe(data => this.myText = data, err => console.log('Nie znaleziono pliku!', err)); 
  }
}
