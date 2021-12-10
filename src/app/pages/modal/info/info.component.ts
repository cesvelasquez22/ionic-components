import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  @Input() name: string;
  @Input() country: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeButton() {
    this.modalController.dismiss();
  }

  sendToParent() {
    this.modalController.dismiss({
      name: 'Pablo',
      country: 'Inglaterra',
    });
  }

}
