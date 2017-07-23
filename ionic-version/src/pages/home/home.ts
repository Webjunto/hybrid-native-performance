import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { ListsStore, ItemsStore } from '../../store/model';
import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lists: any;
  public reOrder = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public listsStore: Store<ListsStore>, public itemsStore: Store<ItemsStore>) {
    listsStore.select('listsReducer')
      .subscribe(data => {
        this.lists = data;
      });
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
    this.listsStore.dispatch({ type: 'SORT_LIST', payload: this.lists });
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
              this.listsStore.dispatch({ type: 'ADD_LIST', payload: newList });
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
