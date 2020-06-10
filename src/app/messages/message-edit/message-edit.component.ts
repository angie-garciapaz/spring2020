import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from '../message.model';
import {MessagesService} from '../messages.service';


@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  currentSender = '1';
  @ViewChild('subject', {static: false}) subjectInputRef: ElementRef;
  @ViewChild('msgText', {static: false}) msgTextInputRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor(private messageService: MessagesService) {
  }

  ngOnInit() {
  }

  onSendMessage() {
    const subjectTitle = this.subjectInputRef.nativeElement.value;
    const msgTextBody = this.msgTextInputRef.nativeElement.value;
    const newMessage = new Message('1', subjectTitle, msgTextBody, this.currentSender);
    this.messageService.addMessage(newMessage);
    this.onClear();
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.msgTextInputRef.nativeElement.value = '';

  }

}
