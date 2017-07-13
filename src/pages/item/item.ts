import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemsPage } from '../items/items';
import _ from 'lodash';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  public selectedList = { id: '' };
  public allItems = [];
  public items = [];
  public item = { listId: '', id: '', name: '', description: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedList = JSON.parse(window.localStorage.getItem('selectedList')) || null;
    this.item = JSON.parse(window.localStorage.getItem('selectedItem')) || this.item;
    this.allItems = JSON.parse(window.localStorage.getItem('items')) || [];
    if (this.selectedList && this.selectedList.id) {
      this.items = _.filter(this.allItems, ['listId', this.selectedList.id]);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

  cancelItem(item) {
    this.navCtrl.push(ItemsPage);
  }

  saveItem(item) {
    window.console.log(item);
    if (!item.id) {
      item.listId = this.selectedList.id;
      item.id = this.items.length + 1;
      item.status = false;
      this.items.push(item);
    } else {
      const itemIndex = _.findIndex(this.items, ['id', item.id]);
      this.items.splice(itemIndex, 1, item);
    }
    window.localStorage.setItem('items', JSON.stringify(this.items));
    this.navCtrl.push(ItemsPage);
  }

}
