import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemPage } from '../item/item';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { "name": "item 1", "tasks": [] },
      { "name": "item 2", "tasks": [] }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad items page');
  }

  openItem(item) {
    window.console.log(item);
    this.navCtrl.push(ItemPage);
  }

  addItem() {
    this.navCtrl.push(ItemPage);
  }

}
