import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class MyValidators {
    public static minWords(count: number): ValidatorFn {
        return ctrl => this.testMinWords(ctrl, count);
    }


    private static testMinWords(control: AbstractControl, count: number): null | ValidationErrors {
        const val = control?.value;   

        if (typeof(val) !== 'string') return null;

        const words = val.split(' ').filter(w => w.length> 0);

        if (words.length >= count) return null;

        return {'minWords': {
            required: count, 
            actual: words.length
        }};
    }
}