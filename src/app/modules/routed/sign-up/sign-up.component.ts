import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RoutePaths } from '@core/enums';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  public routes = RoutePaths;
  public form: FormGroup = this.formBuilder.group({
    name: [],
    surname: [],
    email: [],
    password: []
  });

  constructor(private formBuilder: FormBuilder) {}
}
