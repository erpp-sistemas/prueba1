import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  public firebaseAuth: AngularFireAuth) { }

  /**
   * Metodo para loguearse con firebase
   * @param email 
   * @param password 
   * @returns user
   */
  loginFirebase(email:string, password: string) {

    return new Promise( (resolve, reject ) =>{
      this.firebaseAuth.signInWithEmailAndPassword(email, password).then( user => {
        resolve(user);
      })
      .catch( error => reject(error) );
    })
  }


}
