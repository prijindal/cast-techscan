import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdCardModule,
  MdInputModule,
  MdProgressBarModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdListModule,
  MdSidenavModule,
  MdRadioModule,
  MdPaginatorModule,
  MdGridListModule,
  MdToolbarModule
} from '@angular/material';

const MdComponents = [
  MdButtonModule,
  MdCheckboxModule,
  MdCardModule,
  MdInputModule,
  MdProgressBarModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdListModule,
  MdSidenavModule,
  MdRadioModule,
  MdPaginatorModule,
  MdGridListModule,
  MdToolbarModule
];

@NgModule({
  imports: [MdComponents, BrowserAnimationsModule],
  exports: MdComponents,
})
export class AppMaterialModule { }
