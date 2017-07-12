import { Routes } from '@angular/router';

import { ListPage } from '../pages/list/list';
import { ItemsPage } from '../pages/items/items';
import { ItemPage } from '../pages/item/item';
import { PageNotFound } from '../pages/others/page-not-found';


export const routes: Routes = [
  { path: '', redirectTo: 'lists' },
  { path: 'lists', component: ListPage },
  { path: 'lists/:listId/items', component: ItemsPage },
  { path: 'lists/:listId/items/:itemId', component: ItemPage },
  { path: '**', component: PageNotFound }
];
