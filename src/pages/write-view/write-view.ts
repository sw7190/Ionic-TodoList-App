import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { type } from '../../type';

/**
 * Generated class for the WriteViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-write-view',
  templateUrl: 'write-view.html',
})
export class WriteViewPage {
  
  todo : type = {
    id:5,
    title:'',
    desc : '',
    suc : false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService : DataServiceProvider) {
  }
  
  ionViewDidLoad() {}
  
  async ngOnInit() {
    console.log(2);
    this.todo.id = await this.dataService.getLastNumber()
  }
  
  async saveTodo() {
    await this.dataService.setData(this.todo);
    this.navCtrl.popToRoot();
  }

}
