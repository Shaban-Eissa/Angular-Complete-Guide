import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit {
  userId = input.required<string>();
  private tasksService = inject(TasksService);

  order = signal<'asc' | 'desc'>('desc');

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  userTasks = computed(() =>
    this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.userId())
      .sort((a, b) => {
        if (this.order() === 'desc') {
          return a.id > b.id ? -1 : 1;
        } else {
          return a.id > b.id ? 1 : -1;
        }
      })
  );
  ngOnInit() {
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: (params) => this.order.set(params['order']),
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
