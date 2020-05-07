import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors} from '@angular/forms';
import {UserService} from '../../core/services/user/user.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
    selector: '[appUsernameExist]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useClass: UsernameExistDirective, multi: true}]
})
export class UsernameExistDirective implements AsyncValidator {


    constructor(private userService: UserService) {
    }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        if (!control.value) {
            return of(null);
        }
        return this.userService.existsByUsername(control.value).pipe(map(b => {
            if (b) {
                return {usernameExist: true}
            }
            return null;
        }));
    }

}
