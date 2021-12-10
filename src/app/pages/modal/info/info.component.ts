import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeButton() {
    this.modalController.dismiss();
  }

}
