import {Component, OnInit} from '@angular/core';
import {Message} from '../message.model';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  message: Message[] = [];

  constructor(private messageService: MessagesService) {

  }

  ngOnInit() {
    this.message = this.messageService.getMessages();
    this.messageService.messageChangeEvent.subscribe(
      (message: Message[]) => {
        this.message = message;
      }
    );
  }

  onAddMessage(message: Message) {
    this.message.push(message);
  }

}
