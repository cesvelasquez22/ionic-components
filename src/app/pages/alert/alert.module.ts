import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './alert-routing.module';

import { AlertPage } from './alert.page';
import { ComponentsModule } from '@shared/components';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ComponentsModule, AlertPageRoutingModule],
  declarations: [AlertPage],
})
export class AlertPageModule {}
