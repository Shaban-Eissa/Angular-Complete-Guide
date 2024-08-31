import { Directive, ElementRef, inject, input } from '@angular/core';

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
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('SafeLinkDirective instantiated');
  }

  onConfirmPageLeave(event: MouseEvent) {
    const confirmed = window.confirm('Are you sure you want to leave?');
    if (confirmed) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?form=' + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}
