import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  // private DestroyRef = inject(DestroyRef);
  ngOnInit() {
    // const subscribe = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (val) => console.log(val),
    //   });
    // this.DestroyRef.onDestroy(() => subscribe.unsubscribe());
  }

  onClick() {
    this.clickCount.update((prev) => prev + 1);
  }
}
