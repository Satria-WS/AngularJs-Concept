import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button class="border border-y-orange-500" (click)="sendNotification()">
      Send Notification
    </button>
  `,
  standalone: true,
})
export class ChildComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  sendNotification() {
    this.notify.emit('Notification from child!');
  }
}
