
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{


    validate(control: AbstractControl): Observable<ValidationErrors | null> {
    
        const email = control.value ;

      
        
        const httpCallObservable = new Observable<ValidationErrors | null>((subscribe)=> {

            console.log({email});

            if( email === 'boris@gmail.com'){
                subscribe.next({emailTaken: true});
                subscribe.complete();
            }

            subscribe.next(null);
            subscribe.complete();

        }).pipe(
            delay(3000)
        );

        return httpCallObservable; 

    }


   

    // validate(control: AbstractControl): Observable<ValidationErrors | null> {
    
    //     const email = control.value ;

    //     console.log({email});
        


    //     return of({
    //         emalTaken: true 
    //     })
    // }
   
   



    
}