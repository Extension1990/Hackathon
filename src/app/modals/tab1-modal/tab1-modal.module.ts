import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1ModalPage } from './tab1-modal.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1ModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1ModalPage],
  entryComponents: [Tab1ModalPage]
})
export class Tab1ModalPageModule {}
