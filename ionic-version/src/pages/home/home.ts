import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lists = [];
  public reOrder = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public store: Store<any>) {
    let initList = [
      { id: 1, name: 'Home', bgColor: '#9147A7' },
      { id: 2, name: 'GA', bgColor: '#9147A7' },
      { id: 3, name: 'Doggy doggy', bgColor: '#b9521e' }
    ]
    this.lists = JSON.parse(window.localStorage.getItem('lists')) || initList;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  toggleReorder() {
    this.reOrder = !this.reOrder;
  }
  openList(listItem) {
    window.localStorage.setItem('selectedList', JSON.stringify(listItem));
    this.navCtrl.push(ItemsPage);
  }

  reorderItems(indexes) {
    this.lists = reorderArray(this.lists, indexes);
    window.console.log('this.lists', this.lists);
    window.localStorage.setItem('lists', JSON.stringify(this.lists));
  };

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
            if (data && data.name) {
              let newList = { id: +(new Date()), name: data.name, bgColor: (this.lists.length % 2 === 0) ? '#9147A7' : '#00A087' };
              this.lists.push(newList);
              this.store.dispatch({ type: 'ADD_LIST', payload: newList });
            } else {
              window.alert('Please enter name of the list');
              return false;
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
