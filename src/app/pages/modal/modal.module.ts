import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { InfoComponent } from './info/info.component';
import { ComponentsModule } from '@shared/components';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ModalPageRoutingModule, ComponentsModule],
  declarations: [ModalPage, InfoComponent],
})
export class ModalPageModule {}
