import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService {

  constructor() {

   }

   customValidation(control:FormControl): Observable<ValidationErrors | null>   {
    const value = control.value;
    const validate = value.match(/super/i);
    return of(validate ? null : {custom: true });
  }

}
