import {EventEmitter, Injectable} from '@angular/core';
import {Message} from './message.model';
import {MOCKMESSAGES} from './MOCKMESSAGES';
import {WinRefService} from '../win-ref.service';

@Injectable({providedIn: 'root'})
export class MessagesService {
  messages: Message[];
  messageChangeEvent = new EventEmitter<Message[]>();

  constructor(private winRefService: WinRefService) {
    this.messages = MOCKMESSAGES;
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    this.messages.forEach(
      message => {
        if (message.id === id) {
          return message;
        }
      }
    );
    return null;
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.messageChangeEvent.emit(this.messages.slice());
  }
}
