import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { type } from '../../type';

/**
 * Generated class for the MoreViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more-view',
  templateUrl: 'more-view.html',
})
export class MoreViewPage {
  
  todo : type = {
    id : 0,
    title : '',
    desc : '',
    suc : false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService : DataServiceProvider) {
  }

  async ngOnInit() {
    this.todo = await this.dataService.getSearchData(this.navParams.get('id'));
    console.log(this.todo);
  }

}
