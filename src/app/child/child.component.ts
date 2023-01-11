import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
@Input() parentCounter?: number; 

childCounter: number = 10;

constructor (){}

ngOnInit(): void {
    setInterval(()=>this.childCounter++,500);
}

}
