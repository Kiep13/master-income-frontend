import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaigaModule } from '@features/taiga/taiga.module';

import { LogoComponent } from './logo.component';

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    TaigaModule
  ],
  exports: [
    LogoComponent
  ]
})
export class LogoModule { }
