import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DebounceEventDirective } from '../directives/debounce-event.directive';
import { PasswordService } from '../services/password.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-check-password-complexity',
  standalone: true,
  imports: [FormsModule, DebounceEventDirective, NgClass],
  templateUrl: './check-password-complexity.component.html',
  styleUrl: './check-password-complexity.component.scss'
})
export class CheckPasswordComplexityComponent {
  form = { password: '' };
  passwordState = this.passwordService.definePasswordComplexity('');

  constructor(
    private readonly passwordService: PasswordService,
    
  ) {}

  changePassword(): void {
    this.passwordState = this.passwordService.definePasswordComplexity(this.form.password.trim());

  }
}
