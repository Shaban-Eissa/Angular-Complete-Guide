import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
})
export class MessagesListComponent {
  private messagesService = inject(MessagesService);

  private cdRef = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);

  messages$ = this.messagesService.messages$;
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
