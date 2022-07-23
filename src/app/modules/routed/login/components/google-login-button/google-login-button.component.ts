import { ChangeDetectionStrategy, Component } from '@angular/core';

import { GOOGLE_ICON_LINK } from '../../contants';

@Component({
  selector: 'app-google-login-button',
  templateUrl: './google-login-button.component.html',
  styleUrls: ['./google-login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleLoginButtonComponent {
  public googleIcon = GOOGLE_ICON_LINK;
}
