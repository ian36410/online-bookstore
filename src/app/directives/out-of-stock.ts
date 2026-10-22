import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appOutOfStock]',
  host: {
    '[class.out-of-stock]': 'appOutOfStock() === 0',
  }
})
export class OutOfStock {
  appOutOfStock = input.required<number>()
}
