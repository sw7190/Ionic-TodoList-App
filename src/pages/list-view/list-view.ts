import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { WriteViewPage } from '../write-view/write-view';

import {type} from '../../type';
import { MoreViewPage } from '../more-view/more-view';

@IonicPage()
@Component({
  selector: 'page-list-view',
  templateUrl: 'list-view.html',
})
export class ListViewPage {

  list : type[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService : DataServiceProvider) {
  }

  async ngOnInit(){
    this.list = await this.dataService.getData();
  }
  
  movePage(pageName) {
    switch(pageName){
      case 'write-view':
        this.navCtrl.push(WriteViewPage);
        break;
      default :
        return false; 
    }
    return true;
  }
  
  moreView(id : number) {
    this.navCtrl.push(MoreViewPage, {id:id});
  }

  async suc(target:type) {
    for(let item of this.list){
      if(item.id == target.id){
        item.suc = true;
        return await this.dataService.set(this.list);
      }
    }
  }
  async delete(target:type) {
    for(let i = 0,len = this.list.length; i < len ; i++){
      if(this.list[i].id == target.id){
        this.list.splice(i,1);
        return await this.dataService.set(this.list);
      }
    }
    
  }
}
