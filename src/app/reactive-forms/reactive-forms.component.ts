import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder  } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
    myForm: FormGroup;
    
    constructor(private fb: FormBuilder) {
      this.myForm = this.fb.group({
        name: [''],
        description: [''],
        avaiblity: this.fb.group({
          start: [''],
          end: ['']
        }),
        emails: this.fb.array([
          this.fb.control('')
        ])
      });

      this.myForm.get('description')?.valueChanges.pipe( 
        debounceTime(1500)
      ).subscribe(
        data => console.log(data)
      )

    }


    reload = () =>{
      this.myForm.patchValue({
        name: "Michał"
      });
    }

    onSubmit = () => {
      console.log(this.myForm.value);
    }

    get emails(){
      return this.myForm.get('emails') as FormArray;
    }

    addEmail = () => {
      this.emails.push(this.fb.control(''));
    }
}
