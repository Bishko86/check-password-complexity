import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

import { PasswordService } from '../services/password.service';
import { PasswordState } from '../interfaces/password-state.interface';

@Component({
  selector: 'app-check-password-complexity',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './check-password-complexity.component.html',
  styleUrl: './check-password-complexity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckPasswordComplexityComponent {
  isFieldEmpty = true;
  hasErrors = false;
  passwordState: PasswordState = this.passwordService.definePasswordComplexity('');

  constructor(
    private readonly passwordService: PasswordService,
  ) {}

  changePassword(event: Event): void {
    const password = this.passwordService.getPassword(event);

    this.isFieldEmpty = this.passwordService.isFieldEmpty(password);
    this.hasErrors = this.passwordService.hasErrors(password);
    this.passwordState = this.passwordService.definePasswordComplexity(password);
  }
}
