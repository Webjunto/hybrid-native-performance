import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ItemPage } from '../item/item';
import _ from 'lodash';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  public selectedList = { id: '' };
  public allItems = [];
  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedList = JSON.parse(window.localStorage.getItem('selectedList')) || null;
    this.allItems = JSON.parse(window.localStorage.getItem('items')) || [];
    if (this.selectedList && this.selectedList.id) {
      this.items = _.filter(this.allItems, ['listId', this.selectedList.id]);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

  openItem(item) {
    window.localStorage.setItem('selectedItem', JSON.stringify(item));
    this.navCtrl.push(ItemPage);
  }

  cancelItem() {
    this.navCtrl.push(HomePage);
  }

  addItem() {
    this.navCtrl.push(ItemPage);
  }
  changeStatusOfItem(item) {
    item.status = !item.status;
    const itemIndex = _.findIndex(this.items, ['id', item.id]);
    this.items.splice(itemIndex, 1, item);
    window.localStorage.setItem('items', JSON.stringify(this.items));
  }

}
