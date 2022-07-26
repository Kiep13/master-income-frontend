import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RoutePaths } from '@core/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public routes = RoutePaths;
  public form: FormGroup = this.formBuilder.group({
    email: [],
    password: []
  });

  constructor(private formBuilder: FormBuilder) {}
}
