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
          text: 'Entrar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

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

    await alert.present();
  }

}
