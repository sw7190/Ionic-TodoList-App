import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WriteViewPage } from './write-view';

@NgModule({
  declarations: [
    WriteViewPage,
  ],
  imports: [
    IonicPageModule.forChild(WriteViewPage),
  ],
})
export class WriteViewPageModule {}
