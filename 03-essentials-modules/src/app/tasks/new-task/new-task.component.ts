import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({
    required: true,
  })
  userId!: string;
  @Output() cancel = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.cancel.emit();
  }
}
