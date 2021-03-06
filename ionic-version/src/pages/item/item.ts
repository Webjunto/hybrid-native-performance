import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { ItemsPage } from '../items/items';
import { ListsStore, ItemsStore } from '../../store/model';
import _ from 'lodash';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  public selectedList: any;
  public allItems: any;
  public items: any;
  public item = { listId: '', id: '', name: '', description: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public listsStore: Store<ListsStore>, public itemsStore: Store<ItemsStore>) {
    itemsStore.select('itemsReducer')
      .subscribe(data => {
        this.allItems = data;
      });
    this.selectedList = JSON.parse(window.localStorage.getItem('selectedList')) || null;
    this.item = JSON.parse(window.localStorage.getItem('selectedItem')) || this.item;
    // this.allItems = JSON.parse(window.localStorage.getItem('items')) || [];
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
    if (item.name && item.description) {
      if (!item.id) {
        item.listId = this.selectedList.id;
        item.id = +(new Date());
        item.status = false;
        this.listsStore.dispatch({ type: 'ADD_TASK', payload: item });
      } else {
        this.listsStore.dispatch({ type: 'UPDATE_TASK', payload: item });
      }
      this.navCtrl.push(ItemsPage);
    } else {
      window.alert('Please enter name and description');
    }
  }

}
