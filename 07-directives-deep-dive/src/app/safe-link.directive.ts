import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmPageLeave($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp', {
    alias: 'appSafeLink',
  });
  constructor() {
    console.log('SafeLinkDirective instantiated');
  }

  onConfirmPageLeave(event: MouseEvent) {
    const confirmed = window.confirm('Are you sure you want to leave?');
    if (confirmed) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href =
        address + '?form=' + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}
