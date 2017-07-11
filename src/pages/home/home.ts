import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lists = [];

  constructor(public navCtrl: NavController) {
    this.lists = [
      { "name": "list 1", "tasks": [] },
      { "name": "list 2", "tasks": [] }
    ];
  }

  addListItem() {
    this.lists.push({ "name": `item ${this.lists.length + 1}`, "tasks": [] });
  }

  openList(listItem) {
    window.console.log(listItem);
    this.navCtrl.push(ItemsPage);
  }
}
