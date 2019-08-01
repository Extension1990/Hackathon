import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { ModalController } from '@ionic/angular';
import { Tab1ModalPage } from '../modals/tab1-modal/tab1-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  countries: any;

  constructor(public router: Router, private service: ServiceService, private modalController: ModalController) {}

  ngOnInit() {
    /**
     *  Get countries on page load
     */
    this.getCountries();
  }

  /**
   *  Get countries from the service
   */
  getCountries() {
    this.service.getCountry().subscribe(data => {
      this.countries = data;
      console.log(this.countries);
  });
}

async presentModal() {
  const modal = await this.modalController.create({
    component: Tab1ModalPage
  });
  return await modal.present();
}

dismiss() {
  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  this.modalController.dismiss({
    'dismissed': true
  });
}

}
