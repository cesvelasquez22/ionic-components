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
    });
    await modal.present();
  }
}
