import { Injectable } from '@angular/core';

import {
  LengthStringRegex,
  DigitsRegex,
  LettersRegex,
  SymbolsRegex,
  EmptyStringRegex,
  LatinDigitsSymbolsRegex,
} from '../constants/password-regex.constant';
import { PasswordState } from '../interfaces/password-state.interface';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private isEasy(value: string): boolean {
    return LettersRegex.test(value) || DigitsRegex.test(value) || SymbolsRegex.test(value);
  }

  private isMedium(value: string): boolean {
    return LettersRegex.test(value) && DigitsRegex.test(value)
      || LettersRegex.test(value) && SymbolsRegex.test(value)
      || DigitsRegex.test(value) && SymbolsRegex.test(value)
  }

  private isStrong(value: string): boolean {
    return LettersRegex.test(value) && DigitsRegex.test(value) && SymbolsRegex.test(value);
  }

  definePasswordComplexity(password: string): PasswordState {
    const has8Chars = LengthStringRegex.test(password);
    const isEmpty = EmptyStringRegex.test(password);

    return ({
      isEasy: this.isEasy(password) && has8Chars,
      isMedium: this.isMedium(password) && has8Chars,
      isStrong: this.isStrong(password) && has8Chars,
      has8Chars,
      isEmpty,
    });
  }

  hasErrors(password: string): boolean {
    return !LatinDigitsSymbolsRegex.test(password);
  }

  isFieldEmpty(password: string): boolean {
    return EmptyStringRegex.test(password);
  }
}
