import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutePaths } from '@core/enums';

const routes: Routes = [
  {
    path: RoutePaths.Login,
    loadChildren: () => {
      return import('./modules/routed/login/login.module').then(
        (m) => m.LoginModule
      );
    },
  },
  {
    path: RoutePaths.SignUp,
    loadChildren: () => {
      return import('./modules/routed/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      );
    },
  },
  { path: '**', redirectTo: `/${RoutePaths.Login}` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
