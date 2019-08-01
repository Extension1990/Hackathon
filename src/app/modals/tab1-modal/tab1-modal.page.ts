import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-tab1-modal',
  templateUrl: './tab1-modal.page.html',
  styleUrls: ['./tab1-modal.page.scss'],
})
export class Tab1ModalPage implements OnInit {

  countries: any;

  constructor(private service: ServiceService) { }

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

}
