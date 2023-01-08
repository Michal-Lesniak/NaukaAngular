import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Authors{
  name: string;
  link: string;
  desc: string;
}

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss']
})
export class FetchDataComponent implements OnInit {

  Title: string = 'Fetch data from json file';
  authors!: Authors[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Authors[]>('/data/authors.json').subscribe
    (
      data => this.authors = data,
      err => console.log("Wystąpił bład przy pobieraniu pliku json", err) 
    );
  }
  
}
