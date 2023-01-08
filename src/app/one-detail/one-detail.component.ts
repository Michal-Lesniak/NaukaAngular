import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-one-detail',
  templateUrl: './one-detail.component.html',
  styleUrls: ['./one-detail.component.scss']
})
export class OneDetailComponent {
  idAuthor!: number;

  constructor(private currentRoute: ActivatedRoute, private router: Router) { 
    this.currentRoute.paramMap.subscribe(param => this.idAuthor = + param.get('idAuthor')!);
    console.log(this.idAuthor)
  }

  ngOnInit() {
    
  } 

  nextId(): void{
    this.router.navigate(['/one', this.idAuthor+1]);
  }

  previousId(): void  {
    this.router.navigate(['/one', this.idAuthor-1]); 
  }
}
