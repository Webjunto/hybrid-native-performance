import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Router } from '@angular/router';

// import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public lists = [];

  constructor(public navCtrl: NavController, private router: Router) {
    this.lists = [
      { id: 1, name: "list 1", tasks: [] },
      { id: 2, name: "list 2", tasks: [] }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad list page');
  }

  addListItem() {
    this.lists.push({ id: this.lists.length + 1, name: `list ${this.lists.length + 1}`, tasks: [] });
  }

  openList(listItem) {
    window.console.log(listItem);
    // this.navCtrl.push(ItemsPage);
    this.router.navigate(['/items']);
  }
}
