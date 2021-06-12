import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', { static: true }) slides:IonSlides;
  @ViewChild('passwordEyeRegister', {static: true}) passwordEye;

  email: string = '';
  password: string = '';
  passwordTypeInput = 'password';
  iconpassword = 'eye-off';
  loading:any;
  
  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];


  avatarSlide = {
    slidesPerView: 3.5
  };

  constructor( 
    private loadingController: LoadingController,
    private auth:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }



  async login( ) {

    console.log(`Emai: ${this.email} y password: ${this.password}`);
    this.loading = await this.loadingController.create({
      message: 'Iniciando sesión'
    });

    await this.loading.present();

    // setTimeout(() => {
    //   this.loading.dismiss();
    // }, 3000);

    this.auth.loginFirebase(this.email, this.password).then( user => {
      
      console.log(user);

      // Se ha iniciado sesión de forma exitosa, se quita el loading
      this.loading.dismiss();

      // Se navega hacia el perfil
      this.router.navigateByUrl("/home/tab1");

    }).catch(error => {
      console.error("Error al iniciar sesión", error)
      this.loading.dismiss();
    })

  }

  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
    this.iconpassword = this.iconpassword === 'eye-off' ? 'eye' : 'eye-off';
    this.passwordEye.el.setFocus();
  }


  registro( fRegistro:NgForm) {

    console.log(fRegistro);

  }


  elegirAvatar(avatar) {
    
    this.avatars.forEach( avatar => avatar.seleccionado = false)

    avatar.seleccionado = true;

  }


  mostrarLogin() {
      this.slides.lockSwipes(false);
      this.slides.slideTo(0);
      this.slides.lockSwipes(true);
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

}
