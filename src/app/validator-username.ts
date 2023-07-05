
//    import {AbstractControl,ValidatorFn} from '@angular/forms';

//    export function emailValidator(emailValidator:RegExp):ValidatorFn{
//       return (control:AbstractControl): {[key:string]:any} | null⇒{
//          const forbidden=/admin/.test(control.value);
//          return forbidden ? {'emailValidator':{value: control.value}}:null;
//       };
//   }