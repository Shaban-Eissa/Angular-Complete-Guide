import { Component, DestroyRef, inject, OnInit } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private DestroyRef = inject(DestroyRef);
  ngOnInit() {
    const subscribe = interval(1000).subscribe({
      next: (val) => console.log(val),
    });

    this.DestroyRef.onDestroy(() => subscribe.unsubscribe());
  }
}
