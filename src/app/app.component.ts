import { Component } from '@angular/core';
import { CheckPasswordComplexityComponent } from './check-password-complexity/check-password-complexity.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CheckPasswordComplexityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'check-password-complexity';
}
