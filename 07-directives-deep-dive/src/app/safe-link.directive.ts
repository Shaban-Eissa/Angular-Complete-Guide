import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmPageLeave($event)',
  },
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLinkDirective instantiated');
  }

  onConfirmPageLeave(event: MouseEvent) {
    const confirmed = window.confirm('Are you sure you want to leave?');
    if (!confirmed) {
      event.preventDefault();
    }
  }
}
