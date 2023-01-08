import { Component } from '@angular/core';
import { UserActivityService } from '../user-activity.service';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.scss']
})
export class SixComponent {

  constructor(private service: UserActivityService) { }


  onSwitch(): void {
    this.service.valueEmmiter.next(Math.random());
  }
}
