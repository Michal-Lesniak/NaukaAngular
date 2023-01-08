import { Component, ElementRef, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, map } from 'rxjs';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements AfterViewInit{
  posY: number = 0;
  @ViewChild('AreaY') el!: ElementRef;
  idOffer: string = this.ActivatedRoute.snapshot.params['idOffer'];;
 constructor(private ActivatedRoute:ActivatedRoute){}

 ngAfterViewInit(): void {
   
   const mouseMove = fromEvent<MouseEvent>(this.el.nativeElement, 'mousemove');

   mouseMove.pipe(map(z => z.clientY)).subscribe(data => this.posY = data);
 }
}
