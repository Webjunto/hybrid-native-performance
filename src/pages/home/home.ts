import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lists = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.lists = JSON.parse(window.localStorage.getItem('lists')) || [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openList(listItem) {
    window.localStorage.setItem('selectedList', JSON.stringify(listItem));
    this.navCtrl.push(ItemsPage);
  }

  addListItem() {
    let prompt = this.alertCtrl.create({
      title: 'New List',
      message: "Enter name of the new list",
      inputs: [{ name: 'name', placeholder: 'Title' },],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.lists.push({ id: this.lists.length + 1, name: data.name, bgColor: (this.lists.length % 2 === 0) ? '#9147A7' : '#00A087' });
            window.localStorage.setItem('lists', JSON.stringify(this.lists));
          }
        }
      ]
    });
    prompt.present();
  }
}
