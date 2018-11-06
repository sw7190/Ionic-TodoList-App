import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { type } from '../../type';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(private st : Storage) {
    console.log('Hello DataServiceProvider Provider');
    st.set("data",[]);
  }
  
   async setData(jsonData:type) {
    let data = await this.getData();
    data.push(jsonData);
    this.st.set("data",data);
    return Promise.resolve(true);
  }
  
  async getData() {
    return await this.st.get("data");
  }

  async getLastNumber() {
    let list = await this.st.get("data");
    
    if(list.length == 0) return 1;
    return list.pop().id+1;
  }
  
  async getSearchData(id : number) {
    let list = await this.getData();
    
    for(let item of list){
      if(item.id == id){
        return item;
      }
    }

  }

  set(data) {
    this.st.set("data",data);
    return Promise.resolve(true);
  }
}
