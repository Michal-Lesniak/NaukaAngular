import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validator, ValidationErrors } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Validators } from '@angular/forms';
import { ValidationServiceService } from '../validation-service.service';



@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
    myForm: FormGroup;
    
    constructor(private fb: FormBuilder, validationService: ValidationServiceService) {
      this.myForm = this.fb.group({
        name: ['',Validators.required],
        description: ['', 
        '',
        validationService.customValidation ],
        avaiblity: this.fb.group({
          start: [''],
          end: ['']
        }),
        emails: this.fb.array([
          this.fb.control('', Validators.email)
        ])
      });


    //   this.myForm.get('name')?.valueChanges.pipe( 
    //     debounceTime(1500)
    //   ).subscribe(
    //     value =>{        
    //       const descControl = this.myForm.get('description');
    //       if(value === 'Sylwia'){
    //         descControl?.addValidators(validationService.customValidation);
    //       }
    //       descControl?.updateValueAndValidity();
    //     }
    //   )

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
