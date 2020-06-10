import { HomePage } from './../home/home';
import { ToastProvider } from './../../providers/toast/toast';
import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Product } from './../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage implements OnInit {

  product: Product = {

    name: null
  };

  productForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private HttpService: HttpServiceProvider,
    private toastService: ToastProvider
  ) {

  }

  ngOnInit() {
    this.productForm = new FormGroup({
      'name': new FormControl('')
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }


  createProduct() {

    this.HttpService.post('products', this.productForm.value).subscribe(res => {
      this.toastService.createToast('Produto criado com sucesso.');
      this.navCtrl.setRoot(HomePage);
    });
  }


}
