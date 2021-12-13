import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async showModal() {
    const modal = await this.modalController.create({
      component: InfoComponent,
      componentProps: {
        name: 'Cesar',
        country: 'Honduras',
      },
    });
    await modal.present();

    // const { data } = await modal.onDidDismiss();
    const { data } = await modal.onWillDismiss();
    // console.log('onDidDismiss');
    console.log('onWillDismiss');
    console.log(data);
    console.log(JSON.stringify(data));
  }
}
