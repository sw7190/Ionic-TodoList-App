import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WriteViewPage } from '../write-view/write-view';
import { ListViewPage } from '../list-view/list-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  ngOnInit(){}

  movePage(pageName) {
    switch(pageName){
      case 'write-view':
        this.navCtrl.push(WriteViewPage);
        break;
      case 'list-view':
        this.navCtrl.push(ListViewPage);
        break;
    }
  }

}
