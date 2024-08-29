import { Component, contentChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  onSubmit(titleInput: string, textInput: string) {
    console.log('LOG MESSAGE');
    console.log(titleInput, textInput);
    console.log(this.control());
    // this.form()?.nativeElement.reset();
  }
}
