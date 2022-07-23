import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoModule } from '@features/logo/logo.module';

import { TaigaModule } from '@features/taiga/taiga.module';

import { GoogleLoginButtonComponent } from './components';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
    GoogleLoginButtonComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    TaigaModule,
    ReactiveFormsModule,
    LogoModule
  ]
})
export class LoginModule { }
