import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.getContacts();
  }

  ngOnInit() {
  }

  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }

}
