import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PasswordService } from '../services/password.service';
import { PasswordState } from '../interfaces/password-state.interface';

@Component({
  selector: 'app-check-password-complexity',
  standalone: true,
  imports: [NgClass, NgIf, FormsModule],
  templateUrl: './check-password-complexity.component.html',
  styleUrl: './check-password-complexity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckPasswordComplexityComponent {
  isFieldEmpty = true;
  hasErrors = false;

  form = { password: '' };
  passwordState: PasswordState = this.passwordService.definePasswordComplexity('');

  constructor(
    private readonly passwordService: PasswordService,
  ) {}

  changePassword(): void {
    const password = this.form.password.trim();

    this.isFieldEmpty = this.passwordService.isFieldEmpty(password);
    this.hasErrors = this.passwordService.hasErrors(password);
    this.passwordState = this.passwordService.definePasswordComplexity(password);
  }
}
