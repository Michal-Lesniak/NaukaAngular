import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray  } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
    myForm: FormGroup;
    
    constructor() {
       this.myForm = new FormGroup({
      name: new FormControl(''),
      avaiblity: new FormGroup({
          start: new FormControl<Date | null>(null),
          end: new FormControl<Date | null>(null)
      }),
      description: new FormControl(''),
      emails: new FormArray([
        new FormControl(),
      ]),  
    });
    }

   


    onSubmit = () => {
      console.log(this.myForm.value);
    }

    addEmail = () => {
      (this.myForm.get('emails') as FormArray).push(new FormControl('')); 
    }
}
