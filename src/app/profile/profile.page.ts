import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSequence } from 'protractor';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(private alertCtrl: AlertController) { }

<<<<<<< HEAD
  ngOnInit() {
  }

  //prompt Login
  async loginPrompt() {
    const alert = await this.alertCtrl.create({
      title: 'Login',
      header: 'Login',
      inputs: [
        {
          name: 'ID',
          placeholder: 'ID',
          type: 'String',

        },
        {
          name: 'password',
          placeholder: 'Senha',
          type: 'password',

        }
=======
  async cpfPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Entrar',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nome de usuário'
        },
        {
          name: 'senha1',
          type: 'password',
          id: 'pw1',
          placeholder: 'Senha'
        },
>>>>>>> 8f34e827750147417fafff51f6bcbaaee7714056
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
<<<<<<< HEAD
          handler: data => {
            console.log('Login cancelado!');
          }
        },
        {
          text: 'Login',
          handler: data => {
            if (User.isValid(data.username, data.password)) {
              // logged in!
            } else {
              // invalid login
              return false;
            }
=======
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Entrar',
          handler: () => {
            console.log('Confirm Ok');
>>>>>>> 8f34e827750147417fafff51f6bcbaaee7714056
          }
        }
      ]
    });
<<<<<<< HEAD
    await alert.present();
  }


  //prompt Cadastro
  async cadPrompt() {
    const alert = await this.alertCtrl.create({
      title: 'Registro',
      header: 'Registro',
      inputs: [
        {
          name: 'username',
          placeholder: 'ID',

        
      },
      {
        name: 'password',
        placeholder: 'Senha',
        type: 'password'
      },
      {
        name: 'confirm password',
        placeholder: 'Confirmar Senha',
        type: 'password'
      },
      {
        name: 'e-mail',
        placeholder: 'e-mail'
      },
      {
        name: 'cpf',
        placeholder: 'CPF',
        type: 'number'
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {
          console.log('Cadastro cancelado!');
        }
      },
      {
        text: 'Registrar',
        handler: data => {
          console.log('Cadastro efetuado com sucesso!')
        }
      }
    ]
  });
 await alert.present();
} 
=======

    await alert.present();
  }

async cadPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Cadastro',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nome de usuário'
        },
        {
          name: 'senha1',
          type: 'password',
          id: 'pw1',
          placeholder: 'Senha'
        },
        {
          name: 'senha2',
          id: 'pw2',
          type: 'password',
          placeholder: 'Confirmar senha'
        },
        {
          name: 'name3',
          type: 'email',
          placeholder: 'Endereço de e-mail'
        },
        {
          name: 'cpf',
          placeholder: 'CPF',
          type: 'number'
        },

      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
>>>>>>> 8f34e827750147417fafff51f6bcbaaee7714056

    await alert.present();
  }

}
