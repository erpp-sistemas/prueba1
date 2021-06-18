import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  
    public firebaseAuth: AngularFireAuth,
    private firestore: AngularFirestore
    ) { }

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



  register(email : string, password : string, name : string, idplaza :string, idrol : number,idaspuser : string,rol:string,plaza :string, idUserChecador : number, imgAvatar: string) {

    return new Promise( (resolve, reject) => {

      this.firebaseAuth.createUserWithEmailAndPassword(email, password).then( res => {
        const uid = res.user.uid;

        this.firestore.collection('usersErpp').doc(uid).set({
          name : name,
          email : email,
          password : password,
          idplaza : idplaza,
          idrol : idrol,
          idaspuser : idaspuser,
          uid : uid,
          rol: rol,
          plaza : plaza,
          idUserChecador : idUserChecador,
          IMEI :"",
          lastSession:"",
          managedAccounts:0,
          totalAccounts:0,
          isActive: true,
          isHide:false,
          lastSync:'',
          urlImage: "",
          imgAvatar: imgAvatar
        })

        resolve(res)
      }).catch( err => console.error(err));


    })


  }


}
