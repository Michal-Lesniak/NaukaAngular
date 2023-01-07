import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, map } from 'rxjs';


@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {
  posY: number = 0;
  idOffer: string = '';
 constructor(private ActivatedRoute:ActivatedRoute){}

 ngOnInit(): void {
   this.idOffer = this.ActivatedRoute.snapshot.params['idOffer'];
   const el = document.querySelector('.navbar')!;
   const mouseMove = fromEvent<MouseEvent>(el, 'mousemove');

   mouseMove.pipe(map(z => z.clientY)).subscribe(data => this.posY = data);
 }
}
