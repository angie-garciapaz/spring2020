import {Component, OnInit} from '@angular/core';
import {Message} from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  message: Message[] = [
    new Message('1',
      'Hi',
      'I hope you had a great day',
      'John Langfoss'),
    new Message('2',
      'Monday',
      'Monday was long but hey it is now Friday!',
      'Nancy Paz'),
    new Message('3',
      'Lunch',
      'Today I had a smoothie for lunch.',
      'Carol Garcia'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.message.push(message);
  }

}
