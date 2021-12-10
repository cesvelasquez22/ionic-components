import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentPageRoutingModule } from './segment-routing.module';

import { SegmentPage } from './segment.page';
import { PipesModule } from '@shared/components';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SegmentPageRoutingModule, PipesModule],
  declarations: [SegmentPage],
})
export class SegmentPageModule {}
