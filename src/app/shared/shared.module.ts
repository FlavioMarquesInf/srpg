import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CustomHeaderComponent } from './custom-header/custom-header.component';

const COMPONENTS = [
  CustomHeaderComponent,
//   DrawerComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [
    CommonModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
