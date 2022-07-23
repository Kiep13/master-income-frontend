import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputPasswordModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TuiInputModule,
    TuiButtonModule,
    TuiInputPasswordModule
  ]
})
export class TaigaModule {
}
