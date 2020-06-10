import { CreatePage } from './../create/create';
import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { AboutPage } from './../about/about';
import { HelloPage } from './../hello/hello';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  products;

  constructor(
    public navCtrl: NavController,
    public HttpService: HttpServiceProvider
  ) {

  }

  ngOnInit() {
    this.products = this.HttpService.get('products');
  }

  goToPage(message) {
    this.navCtrl.push(HelloPage, {
      'id': message
    });
  }

  goToAboutPage() {
    this.navCtrl.push(AboutPage);
  }

  goToAboutPageAsRoot() {
    this.navCtrl.setRoot(AboutPage);
  }

  goToSingle(productId) {
    this.navCtrl.push(HelloPage, {
      'productId': productId
    });
  }

  goToCreatePage() {
    this.navCtrl.push(CreatePage);
  }
}
