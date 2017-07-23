import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import _ from 'lodash';

import { ListsStore, ItemsStore } from '../../store/model';
import { HomePage } from '../home/home';
import { ItemPage } from '../item/item';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  public selectedList: any;
  public allItems: any;
  public items: any;
  public actualCount = 0;
  public filterType = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listsStore: Store<ListsStore>, public itemsStore: Store<ItemsStore>) {
    itemsStore.select('itemsReducer')
      .subscribe(data => {
        this.allItems = data;
      });

    this.selectedList = JSON.parse(window.localStorage.getItem('selectedList')) || null;
    // this.allItems = JSON.parse(window.localStorage.getItem('items')) || [];
    if (this.selectedList && this.selectedList.id) {
      this.items = _.filter(this.allItems, ['listId', this.selectedList.id]);
      this.actualCount = this.items.length;
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
    window.localStorage.removeItem('selectedItem');
    this.navCtrl.push(ItemPage);
  }
  changeStatusOfItem(item) {
    item.status = !item.status;
    this.listsStore.dispatch({ type: 'UPDATE_TASK', payload: item });
    // const itemIndex = _.findIndex(this.items, ['id', item.id]);
    // this.items.splice(itemIndex, 1, item);
    // window.localStorage.setItem('items', JSON.stringify(this.items));
  }

  filterItems(status) {
    this.filterType = status;
    if (status === true) {
      this.items = _.filter(this.allItems, { 'listId': this.selectedList.id, status: true });
    } else if (status === false) {
      this.items = _.filter(this.allItems, { 'listId': this.selectedList.id, status: false });
    } else {
      this.items = _.filter(this.allItems, { 'listId': this.selectedList.id });
    }
  }

}
