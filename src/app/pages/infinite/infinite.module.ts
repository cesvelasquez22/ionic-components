import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitePageRoutingModule } from './infinite-routing.module';

import { InfinitePage } from './infinite.page';
import { ComponentsModule } from '@shared/components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    InfinitePageRoutingModule
  ],
  declarations: [InfinitePage]
})
export class InfinitePageModule {}
